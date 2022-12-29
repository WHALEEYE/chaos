import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import {getSortedPostsData} from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import {GetStaticProps} from 'next'
import React from "react";
import Card from "../../components/card";

export const sectionName = "talks";
const featured = ["ssg-ssr"];

export default function Talks({sortedPostsData}: {
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
            <div className={"grid gap-y-8"}>
                <div>This is the homepage of talks.</div>

                {/*Featured*/}
                {(featured.length != 0) && (
                    <Card title={"Featured"}>
                        {sortedPostsData.map(({id, date, title}) => (
                            (featured.includes(id)) && (
                                <div key={id}>
                                    <Link href={`/${sectionName}/${id}`}>
                                        <span className={"link-header"}>{title}</span>
                                    </Link>
                                    <div className={"light-text"}>
                                        <Date dateString={date}/>
                                    </div>
                                </div>
                            )
                        ))}
                    </Card>
                )}

                {/* All */}
                <Card title={"All"}>
                    {sortedPostsData.map(({id, date, title}) => (
                        <div key={id}>
                            <Link href={`/${sectionName}/${id}`}>
                                <span className={"link-header"}>{title}</span>
                            </Link>
                            <div className={"light-text"}>
                                <Date dateString={date}/>
                            </div>
                        </div>
                    ))}
                </Card>
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


