import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout'
import React from "react";
import Link from "next/link";
import Showcase from "../components/Showcase";
import {Languages, Sections} from "../lib/enums";
import {Trans, useTranslation} from "react-i18next";
import ProjectDetail from "../components/profile/ProjectDetail";

const i18nNS = 'profile';
const section = Sections.PROFILE;
const sectionPath = Sections.getPath(section)

export default function Profile({curLan, setCurLan}: {
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {

    const {t} = useTranslation(i18nNS);

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

    return (
        <Layout section={section} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"grid gap-y-8"}>
                <div>
                    This page is my profile containing some of my brief information. You can check the full CV <Link
                    href={"/CV.pdf"}><span className={"link-ina"}>here</span></Link>.
                </div>
                {/* Education */}
                <Showcase title={t('edu.title')}>
                    <div>
                        <div><b>{t('edu.nu.degree')}</b>, <i>{t('edu.nu.name')}</i></div>
                        <div className={"light-text"}>{t('edu.nu.period')}</div>
                    </div>
                    <div>
                        <div><b>{t('edu.sustech.degree')}</b>, <i>{t('edu.sustech.name')}</i></div>
                        <div className={"light-text"}>{t('edu.sustech.period')}</div>
                    </div>
                    <div>
                        <div><b>{t('edu.wisc.degree')}</b>, <i>{t('edu.wisc.name')}</i></div>
                        <div className={"light-text"}>{t('edu.wisc.period')}</div>
                    </div>
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
                        <ProjectDetail
                            key={project.key}
                            projectName={t(`projects.${project.key}.name`)}
                            projectDesc={t(`projects.${project.key}.des`, {returnObjects: true})}
                            githubLink={project.link}
                        />
                    ))}
                </Showcase>

                {/* Awards */}
                <Showcase title={"Awards"}>
                    <div>
                        <div><b>SUSTech Outstanding Freshman Scholarship</b>, <i>Second-class Award</i></div>
                        <div className={"light-text"}>Jun, 2019</div>
                    </div>
                    <div>
                        <div><b>USTC Hackergame 2021</b>, <i>Rank: 44/2677</i></div>
                        <div className={"light-text"}>Oct, 2021</div>
                    </div>
                    <div>
                        <div><b>Guangdong College Students’ CTF Competition</b>, <i>Rank: 37/504</i></div>
                        <div className={"light-text"}>May, 2022</div>
                    </div>
                    <div>
                        <div><b>SUSTech Outstanding Student Scholarship</b>, <i>Third-class Award</i></div>
                        <div className={"light-text"}>Sept, 2022</div>
                    </div>
                </Showcase>
            </div>
        </Layout>
    )
}


