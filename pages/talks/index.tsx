import Head from 'next/head'
import Layout, {siteTitle} from '../../components/Layout'
import {getSortedBriefPostsData} from '../../lib/posts'
import {GetStaticProps} from 'next'
import React from "react";
import Showcase from "../../components/Showcase";
import SmallCard from "../../components/SmallCard";
import {Languages, Sections} from "../../lib/enums";
import {Trans, useTranslation} from "react-i18next";

export const section = Sections.TALKS;
const sectionPath = Sections.getPath(section)

export default function Talks({sortedBriefPostsData, curLan, setCurLan}: {
    sortedBriefPostsData: {
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
    let features = sortedBriefPostsData.filter(({featured}) => featured)
    const i18nNS = 'talks';
    const {t} = useTranslation(i18nNS);

    return (
        <Layout section={section} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Brief information on the right */}
            <div className={"grid gap-y-8"}>
                <div><Trans i18nKey={"intro"} ns={i18nNS}/></div>

                {/*Featured*/}
                {(features.length != 0) && (
                    <Showcase title={t('feat')}>
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
                <Showcase title={t('all')}>
                    {sortedBriefPostsData.map(({id, date, cover, fallbackLan, titleForAllLan}) => (
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
    const sortedBriefPostsData = getSortedBriefPostsData(section);
    return {
        props: {
            sortedBriefPostsData
        }
    }
}


