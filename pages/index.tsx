import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {getLatestPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {GetStaticProps} from 'next'
import React from "react";
import Card from '../components/card'

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
                <div className={"grid gap-y-2"}>
                    <div>Hello there! Welcome to CHAOS, my personal website.</div>
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
                {allLatestPostsData.map(({section, posts}) => (
                    <Card title={"Latest " + section.charAt(0).toUpperCase() + section.slice(1)} key={section}>
                        {posts.map(({id, date, title}) => (
                            <div key={id}>
                                <Link href={`/${section}/${id}`}>
                                    <span className={"link-header"}>{title}</span>
                                </Link>
                                <div className={"light-text"}>
                                    <Date dateString={date}/>
                                </div>
                            </div>
                        ))}
                    </Card>
                ))}
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


