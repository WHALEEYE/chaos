import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getLatestPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {GetStaticProps} from 'next'
import React from "react";

export default function Home({allLatestPostsData}: {
    allLatestPostsData: {
        section: string
        posts: {
            date: string
            title: string
            id: string
        }[]
    }[]
}) {
    return (
        <Layout section={"home"}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={"grid gap-y-8"}>
                {/* bios */}
                <div className={"grid gap-y-3"}>
                    <div>Hello there! Welcome to CHAOS, my personal blog.</div>
                    <div>The articles about academic and technical topics will be collected in <Link
                        href={"/articles"}><span
                        className={"link-ina"}>articles</span></Link>, and those about casual, miscellaneous topics
                        can be seen in <Link href={"/talks"}><span className={"link-ina"}>talks</span></Link>. Feel
                        free to take a look at them.
                    </div>
                    <div>You can see my CV <Link href={"/CV.pdf"}><span className={"link-ina"}>here</span></Link> if
                        interested.
                    </div>
                    <div>Have a good time! =)</div>
                </div>
                {/* Latest */}
                <div className={"grid gap-y-12"}>
                    {allLatestPostsData.map(({section, posts}) => (
                        <div key={section}>
                            <div className={"text-2xl font-black mb-3"}>
                                Latest {section.charAt(0).toUpperCase() + section.slice(1)}
                            </div>
                            <div className={"grid gap-3"}>
                                {posts.map(({id, date, title}) => (
                                    <div className={"list-none leading-relaxed"} key={id}>
                                        <Link href={`/${section}/${id}`}>
                                            <span className={"link-ina"}>{title}</span>
                                        </Link>
                                        <br/>
                                        <small className={utilStyles.lightText}>
                                            <Date dateString={date}/>
                                        </small>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allLatestPostsData = getLatestPostsData()
    return {
        props: {
            allLatestPostsData
        }
    }
}


