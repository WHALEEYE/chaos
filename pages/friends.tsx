import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout'
import React from "react";
import {Languages, Sections} from "../lib/enums";
import {useTranslation} from "react-i18next";


const section = Sections.FRIENDS;
const sectionPath = Sections.getPath(section)

export default function Friends({curLan, setCurLan}: {
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    const {t} = useTranslation('friends')

    return (
        <Layout section={section} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Brief information on the right */}
            <div className={"grid gap-y-4"}>
            </div>
        </Layout>
    )
}


