import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout'
import React from "react";
import Link from "next/link";
import Showcase from "../components/Showcase";
import {Languages, Sections} from "../lib/enums";
import {Trans, useTranslation} from "react-i18next";

const i18nNS = 'profile';
const section = Sections.PROFILE;
const sectionPath = Sections.getPath(section)

export default function Profile({curLan, setCurLan}: {
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {

    const {t} = useTranslation(i18nNS);

    const edu = ["nu", "sustech", "wisc"];

    const projects = [
        {
            key: 'ms',
            link: 'https://github.com/WHALEEYE/MicroShield'
        },
        {
            key: 'store',
            link: 'https://github.com/WHALEEYE/SUSTech-Store-Backend'
        },
        {
            key: 'spl',
            link: 'https://github.com/dandansamax/SPL-Compiler'
        },
        {
            key: 'hc',
            link: 'https://github.com/WHALEEYE/Hash-Checker'
        }
    ];

    const awards = ["freshman", "hg2021", "ctf2022", "outstanding"];

    return (
        <Layout section={section} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"grid gap-y-8"}>
                <div>
                    <Trans i18nKey={"intro"} ns={i18nNS} components={{
                        cv: <Link href={"/files/CV.pdf"} className={"link-inline"}/>,
                    }}/>
                </div>
                {/* Education */}
                <Showcase title={t('edu.title')}>
                    {edu.map(edu => (
                        <div key={edu}>
                            <div><b>{t(`edu.${edu}.degree`)}</b>, <i>{t(`edu.${edu}.name`)}</i></div>
                            <div className={"light-text"}>{t(`edu.${edu}.period`)}</div>
                        </div>
                    ))}
                </Showcase>

                {/* Research Interests */}
                <Showcase title={t('research.title')}>
                    <Trans i18nKey={"research.content"} ns={i18nNS} components={{
                        div: <div/>,
                        b: <b/>
                    }}/>
                </Showcase>

                {/* Projects */}
                <Showcase title={t('projects.title')}>
                    {projects.map(project => (
                        <div key={project.key}>
                            <Link href={project.link}>
                                <span className={"link-header"}>{t(`projects.${project.key}.name`)}</span>
                            </Link>
                            <div className={"light-text"}>
                                {(t(`projects.${project.key}.des`, {returnObjects: true}) as string[])
                                    .map((desc, index) => (
                                        <div key={index}>{desc}</div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </Showcase>

                {/* Awards */}
                <Showcase title={t('awards.title')}>
                    {awards.map(award => (
                        <div key={award}>
                            <div><b>{t(`awards.${award}.title`)}</b>, <i>{t(`awards.${award}.subTitle`)}</i></div>
                            <div className={"light-text"}>{t(`awards.${award}.date`)}</div>
                        </div>
                    ))}
                </Showcase>
            </div>
        </Layout>
    )
}


