import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout'
import {getLatestPostsData} from '../lib/posts'
import Link from 'next/link'
import {GetStaticProps} from 'next'
import React from "react";
import Showcase from '../components/Showcase'
import SmallCard from "../components/SmallCard";
import {Languages, Sections} from "../lib/enums";

export default function Home({allLatestPostsData, curLan, setCurLan}: {
    allLatestPostsData: {
        section: Sections
        posts: {
            id: string,
            date: string,
            cover: string,
            fallbackLan: Languages, titleForAllLan: string[],
        }[]
    }[],
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    return (
        <Layout section={Sections.HOME} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={"grid gap-y-8"}>
                {/* bios */}
                <div className={"grid gap-y-2"}>
                    <div>Hello there! Welcome to CHAOS, my personal website.</div>
                    <div>
                        The articles about academic and technical topics will be collected in <Link
                        href={"/articles"}>articles</Link>, and those about casual, miscellaneous topics can be seen
                        in <Link href={"/talks"}>talks</Link>. Feel free to take a look at them.
                    </div>
                    <div>You can see my CV <Link href={"/CV.pdf"}>here</Link> if interested.</div>
                    <div>Have a good time! =)</div>
                </div>

                {/* About This Blog */}
                <Showcase title={"About This Blog"}>
                    <div>This blog is totally built from sketch with <Link
                        href={"https://react.dev/"}>React</Link> + <Link href={"https://nextjs.org/"}>Next.js</Link> +
                        <Link href={"https://www.typescriptlang.org/"}>TypeScript</Link>, with <Link
                            href={"https://tailwindcss.com/"}>TailwindCSS</Link> used as the
                        CSS library. The blog is a static website hosted on <Link
                            href={"https://vercel.com/"}>Vercel</Link>.
                    </div>
                    <div>You can view the GitHub repository of this blog <Link
                        href={"https://github.com/WHALEEYE/chaos"}>here</Link>. The source code of this blog is MIT
                        licensed.
                    </div>
                </Showcase>

                {/* Latest */}
                {allLatestPostsData.map(({section, posts}) => (
                    <Showcase
                        title={(curLan === Languages.ENG ? "Latest " : "新发布") + Sections.getName(section, curLan)}
                        key={section}>
                        {posts.map(({id, date, cover, fallbackLan, titleForAllLan}) => (
                            <div key={id}>
                                <SmallCard
                                    title={titleForAllLan[curLan] ?? titleForAllLan[fallbackLan]}
                                    dateString={date} sectionPath={Sections.getPath(section)}
                                    id={id} coverString={cover} curLan={curLan}/>
                            </div>
                        ))}
                    </Showcase>
                ))}
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allLatestPostsData = getLatestPostsData()
    return {
        props: {
            allLatestPostsData
        }
    }
}


