import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout'
import {getLatestBriefPostsData} from '../lib/posts'
import Link from 'next/link'
import {GetStaticProps} from 'next'
import React from "react";
import Showcase from '../components/Showcase'
import SmallCard from "../components/SmallCard";
import {Languages, Sections} from "../lib/enums";
import {Trans, useTranslation} from "react-i18next";


const i18nNS = 'index';

export default function Home({allLatestBriefPostsData, curLan, setCurLan}: {
    allLatestBriefPostsData: {
        section: Sections
        posts: {
            id: string,
            date: string,
            cover: string,
            fallbackLan: Languages,
            titleForAllLan: string[],
        }[]
    }[],
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    const {t} = useTranslation(i18nNS);
    return (
        <Layout section={Sections.HOME} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={"grid gap-y-8"}>
                {/* Intro */}
                <div className={"grid gap-y-2"}>
                    <Trans i18nKey={"intro"} ns={i18nNS} components={{
                        articles: <Link href={"/articles"} className={"link-ina"}/>,
                        talks: <Link href={"/talks"} className={"link-ina"}/>,
                        cv: <Link href={"/files/CV.pdf"} className={"link-ina"}/>,
                        div: <div/>
                    }}/>
                </div>

                {/* About This Blog */}
                <Showcase title={t('aboutTitle')}>
                    <Trans i18nKey="about" ns={i18nNS} components={{
                        react: <Link href="https://react.dev/" className="link-ina">React</Link>,
                        nextjs: <Link href="https://nextjs.org/" className="link-ina">Next.js</Link>,
                        ts: <Link href="https://www.typescriptlang.org/" className="link-ina">TypeScript</Link>,
                        tailwind: <Link href="https://tailwindcss.com/" className="link-ina">TailwindCSS</Link>,
                        vercel: <Link href="https://vercel.com/" className="link-ina">Vercel</Link>,
                        div: <div/>,
                        repo: <Link href={"https://github.com/WHALEEYE/chaos"} className={"link-ina"}/>,
                    }}/>
                </Showcase>

                {/* Latest */}
                {allLatestBriefPostsData.map(({section, posts}) => (
                    <Showcase
                        title={t('latest') + Sections.getName(section, curLan)}
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
    const allLatestBriefPostsData = getLatestBriefPostsData()
    return {
        props: {
            allLatestBriefPostsData
        }
    }
}


