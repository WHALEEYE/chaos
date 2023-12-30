import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout'
import React from "react";
import {Languages, Sections} from "../lib/enums";
import {useTranslation} from 'react-i18next';


const section = Sections.FRIENDS;
const sectionPath = Sections.getPath(section)

export default function Friends({curLan, setCurLan}: {
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    const { t, i18n } = useTranslation();
    return (
        <Layout section={section} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Brief information on the right */}
            <div className={"grid gap-y-4"}>

                <div className={"leading-normal"}>
                    <p>These are my friends!</p>
                </div>

                <div className={"leading-normal"}>
                    <p>{t('Welcome to React')}</p>
                </div>

                <div className={"grid gap-y-12"}>
                </div>
            </div>
        </Layout>
    )
}


