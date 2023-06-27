import Head from 'next/head'
import Layout, {siteTitle} from '../../components/Layout'
import {getSortedPostsData} from '../../lib/posts'
import {GetStaticProps} from 'next'
import React from "react";
import Showcase from "../../components/Showcase";
import SmallCard from "../../components/SmallCard";
import {Languages, Sections} from "../../lib/enums";

export const section = Sections.TALKS;
const sectionPath = Sections.getPath(section)

export default function Talks({sortedPostsData, curLan, setCurLan}: {
    sortedPostsData: {
        id: string,
        date: string,
        cover: string,
        featured: boolean,
        fallbackLan: Languages,
        titleForAllLan: string[],
    }[],
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    let features = sortedPostsData.filter(({featured}) => featured)
    return (
        <Layout section={section} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Brief information on the right */}
            <div className={"grid gap-y-8"}>
                <div>This is the homepage of talks.</div>

                {/*Featured*/}
                {(features.length != 0) && (
                    <Showcase title={"Featured"}>
                        {features.map(({id, date, cover, fallbackLan, titleForAllLan}) => (
                            <div key={id}>
                                <SmallCard title={titleForAllLan[curLan] ?? titleForAllLan[fallbackLan]}
                                           dateString={date} sectionPath={sectionPath} id={id}
                                           coverString={cover} curLan={curLan}/>
                            </div>
                        ))}
                    </Showcase>
                )}

                {/* All */}
                <Showcase title={"All"}>
                    {sortedPostsData.map(({id, date, cover, fallbackLan, titleForAllLan}) => (
                        <div key={id}>
                            <div key={id}>
                                <SmallCard title={titleForAllLan[curLan] ?? titleForAllLan[fallbackLan]}
                                           dateString={date} sectionPath={sectionPath} id={id}
                                           coverString={cover} curLan={curLan}/>
                            </div>
                        </div>
                    ))}
                </Showcase>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const sortedPostsData = getSortedPostsData(section);
    return {
        props: {
            sortedPostsData
        }
    }
}


