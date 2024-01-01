import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, {ReactNode} from "react";
import {Languages, Sections, localeName} from "../lib/enums";
import i18n from "../lib/i18n";
import {Trans, useTranslation} from "react-i18next";

export const siteTitle = 'CHAOS';

const i18nNS = "layout";

function switchLan(curLan: Languages, setCurLan: React.Dispatch<React.SetStateAction<Languages>>) {
    let otherLan = curLan === Languages.CHN ? Languages.ENG : Languages.CHN;
    i18n.changeLanguage(localeName[otherLan]).then(() => setCurLan(otherLan));
}

export default function Layout({children, section, curLan, setCurLan}: {
    children: ReactNode,
    section?: Sections,
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    const {t} = useTranslation(i18nNS);
    const profileButton = (section === Sections.PROFILE) ?
        <div className={"navi-selected navibutton-wide"}>{t('profile')}</div> :
        <Link href={"/profile"}>
            <div className={"navi-unselected hover:navi-selected navibutton-wide"}>{t('profile')}</div>
        </Link>

    const articleButton = (section === Sections.ARTICLES) ?
        <div className={"navi-selected navibutton-wide"}>{t('articles')}</div> :
        <Link href={"/articles"}>
            <div className={"navi-unselected hover:navi-selected navibutton-wide"}>{t('articles')}</div>
        </Link>

    const talkButton = (section === Sections.TALKS) ?
        <div className={"navi-selected navibutton-wide"}>{t('talks')}</div> :
        <Link href={"/talks"}>
            <div className={"navi-unselected hover:navi-selected navibutton-wide"}>{t('talks')}</div>
        </Link>

    const friendButton = (section === Sections.FRIENDS) ?
        <div className={"navi-selected navibutton-wide"}>{t('friends')}</div> :
        <Link href={"/friends"}>
            <div className={"navi-unselected hover:navi-selected navibutton-wide"}>{t('friends')}</div>
        </Link>

    const lanButton =
        <div onClick={() => switchLan(curLan, setCurLan)}
             className={"navi-unselected font-normal text-center navibutton hover:navi-selected"}>
            {t('lang-button')}
        </div>

    const nightButton =
        <div className={"navibutton hover:navi-selected"}><Image src={"/icons/night.svg"} className={"cursor-pointer"}
                                                                 width={"20"} height={"20"} alt={"night"}></Image></div>

    return (
        <div className={"grid gap-10"}>
            <Head>
                <link rel="icon" href="/icons/favicon.svg"/>
                <meta
                    name="description"
                    content="Isaac Jin's personal blog"
                />
                {/* TODO: update og image after the repo is public */}
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>

            {/* navigator bar */}
            <div
                className={"backdrop-blur-lg border-b border-gray-700/20 select-none fixed h-10 inset-x-0 z-10 gap-x-10 flex justify-center bg-gray-300/10"}>
                <div className={"flex justify-end grow max-w-[1200px]"}>
                    <div className={"grow flex items-center"}>
                        <Link href={"/"}>
                            <div className={"cursor-pointer flex gap-2 text-black hover:text-[#996E5C] items-center"}>
                                <Image src={"/icons/icon-b.svg"} width={"28"} height={"28"} alt={"icon"}/>
                                <div className={"font-extrabold text-2xl"}>{siteTitle}</div>
                            </div>
                        </Link>
                    </div>
                    <div className={"flex flex-none gap-x-8 items-center"}>
                        <div className={"flex"}>
                            {lanButton}
                            {/*{nightButton}*/}
                        </div>
                        {profileButton}
                        {articleButton}
                        {talkButton}
                        {friendButton}
                    </div>

                </div>

            </div>

            <div className={"mt-20 mb-10 flex justify-center select-none"}>
                <div className={"grid-cols-5 grid gap-3 max-w-[1200px] grow"}>
                    {/* Personal Profile on Left */}
                    <div>
                        <div
                            className={"grid border-r fixed max-w-[250px] w-[17%] pr-4 top-20 bottom-10 content-between"}>
                            <div className={"grid gap-y-2 justify-items-start"}>
                                <div>
                                    <Image
                                        priority
                                        src={"/images/avatar.jpg"}
                                        className={"rounded-3xl"}
                                        height={"180"}
                                        width={"180"}
                                        alt={"avatar"}
                                    />
                                </div>
                                <div className={"text-3xl font-extrabold"}>{t('name')}</div>
                                <div className={"text-gray-400"}>{t('bios')}</div>
                                <div>
                                    <Trans i18nKey={'edu'} ns={i18nNS} components={{
                                        school: <Link href={"https://www.northwestern.edu/"} className={"link-ina"}/>
                                    }}/>
                                </div>
                            </div>

                            <div className={"grid gap-y-2 justify-items-start"}>
                                <div className={"flex gap-x-4"}>
                                    <div>
                                        <Link href={"https://twitter.com/Whale__Eye"}>
                                            <Image src={"/icons/twitter-icon.svg"} className={"cursor-pointer"}
                                                   width={"30"}
                                                   height={"30"} alt={"GitHub"}></Image>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={"https://www.github.com/WHALEEYE"}>
                                            <Image src={"/icons/github-icon.svg"} className={"cursor-pointer"}
                                                   width={"30"}
                                                   height={"30"} alt={"Twitter"}>
                                            </Image>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={"https://steamcommunity.com/id/whaleeye/"}>
                                            <Image src={"/icons/steam-icon.svg"} className={"cursor-pointer"}
                                                   width={"30"}
                                                   height={"30"} alt={"Steam"}>
                                            </Image>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={"https://www.facebook.com/whale.swaggy"}>
                                            <Image src={"/icons/facebook-icon.svg"} className={"cursor-pointer"}
                                                   width={"30"} height={"30"} alt={"Steam"}>
                                            </Image>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <Link href={"mailto:isaacjin@u.northwestern.edu"}>
                                        <div
                                            className={"link-ina"}>{t('contact')}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Brief information on the right */}
                    <div className={"col-span-4 ml-20"}>
                        <main>{children}</main>
                    </div>
                </div>
            </div>

        </div>
    );
}
