import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import {getSortedPostsData} from '../../lib/posts'
import {GetStaticProps} from 'next'
import React from "react";
import Showcase from "../../components/showcase";
import SmallCard from "../../components/small_card";
import {Languages} from "../../lib/enums";

export const sectionName = "talks";

export default function Talks({sortedPostsData, curLan, setCurLan}: {
    sortedPostsData: {
        date: string
        title: string
        id: string
        featured: boolean
        cover: string
    }[],
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    let features = sortedPostsData.filter(({featured}) => featured)
    return (
        <Layout section={sectionName} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Brief information on the right */}
            <div className={"grid gap-y-8"}>
                <div>This is the homepage of talks.</div>

                {/*Featured*/}
                {(features.length != 0) && (
                    <Showcase title={"Featured"}>
                        {features.map(({id, date, title, cover}) => (
                            <div key={id}>
                                <SmallCard title={title} dateString={date} sectionName={sectionName} id={id}
                                           coverString={cover}/>
                            </div>
                        ))}
                    </Showcase>
                )}

                {/* All */}
                <Showcase title={"All"}>
                    {sortedPostsData.map(({id, date, title, cover}) => (
                        <div key={id}>
                            <div key={id}>
                                <SmallCard title={title} dateString={date} sectionName={sectionName} id={id}
                                           coverString={cover}/>
                            </div>
                        </div>
                    ))}
                </Showcase>
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


