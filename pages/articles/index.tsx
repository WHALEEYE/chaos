import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import {getSortedPostsData} from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import {GetStaticProps} from 'next'
import React from "react";

export const sectionName = "articles";
const featured = ["ssg-ssr"];

export default function Home({sortedPostsData}: {
    sortedPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout section={sectionName}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Brief information on the right */}
            <div className={"grid gap-y-4"}>

                <div className={"leading-normal"}>
                    <p>This is the homepage of articles.</p>
                </div>

                <div className={"grid gap-y-12"}>
                    {/*Featured*/}
                    {(featured.length != 0) && (
                        <div>
                            <div className={"text-2xl font-black mb-3"}>Featured</div>
                            <div className={"grid gap-3"}>
                                {sortedPostsData.map(({id, date, title}) => (
                                    (featured.includes(id)) && (
                                        <div className={"list-none leading-relaxed"} key={id}>
                                            <Link href={`/${sectionName}/${id}`}>
                                                <span className={"link-ina"}>{title}</span>
                                            </Link>
                                            <br/>
                                            <small className={utilStyles.lightText}>
                                                <Date dateString={date}/>
                                            </small>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    )}

                    {/* All */}
                    <div>
                        <div className={"text-2xl font-black mb-3"}>All</div>
                        <div className={"grid gap-3"}>
                            {sortedPostsData.map(({id, date, title}) => (
                                <div className={"list-none leading-relaxed"} key={id}>
                                    <Link href={`/${sectionName}/${id}`}>
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
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const sortedPostsData = getSortedPostsData(sectionName)
    return {
        props: {
            sortedPostsData
        }
    }
}


