import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, {ReactNode} from "react";
import {Languages} from "../lib/enums";

export const name = 'Isaac Jin';
export const siteTitle = 'CHAOS';

export default function Layout({children, section, curLan, setCurLan}: {
    children: ReactNode, section?: string, curLan: Languages, setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {

    const profileButton = (section === "profile") ?
        <div className={"navi-selected"}>Profile</div> :
        <Link href={"/profile"}>
            <div className={"navi-unselected hover:navi-selected"}>Profile</div>
        </Link>

    // TODO: Friends and Markdown
    const articleButton = (section === "articles") ?
        <div className={"navi-selected"}>Articles</div> :
        <Link href={"/articles"}>
            <div className={"navi-unselected hover:navi-selected"}>Articles</div>
        </Link>

    const talkButton = (section === "talks") ?
        <div className={"navi-selected"}>Talks</div> :
        <Link href={"/talks"}>
            <div className={"navi-unselected hover:navi-selected"}>Talks</div>
        </Link>

    const friendButton = (section === "friends") ?
        <div className={"navi-selected"}>Friends</div> :
        <Link href={"/friends"}>
            <div className={"navi-unselected hover:navi-selected"}>Friends</div>
        </Link>

    const lanButton =
        <div onClick={() => setCurLan(curLan === Languages.CHN ? Languages.ENG : Languages.CHN)}
             className={"cursor-pointer grid w-12 items-center text-center"}>
            {curLan === Languages.ENG ? "ENG" : "中"}
        </div>

    const nightButton =
        <div className={"grid items-center"}><Image src={"/icons/night.svg"} className={"cursor-pointer"} width={"20"}
                                               height={"20"}
                                               alt={"night"}></Image></div>

    return (
        <div className={"grid gap-10"}>
            <Head>
                <link rel="icon" href="/favicon.svg"/>
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
                    <div className={"flex items-center"}>
                        <Link href={"/"}>
                            <div className={"cursor-pointer flex gap-2 text-black hover:text-[#996E5C]"}>
                                <Image src={"/favicon.svg"} width={"28"} height={"28"} alt={"icon"}></Image>
                                <div className={"font-extrabold text-2xl"}>{siteTitle}</div>
                            </div>
                        </Link>
                    </div>
                    <div className={"flex items-center grow justify-center gap-x-5"}>
                        {lanButton}
                        {nightButton}
                    </div>
                    <div className={"flex flex-none"}>
                        {profileButton}
                        {articleButton}
                        {talkButton}
                        {friendButton}
                    </div>
                    {/* TODO: Night Mode */}
                    {/*<div className={"flex-none flex gap-4"}>*/}
                    {/*    <Image src={"/icons/night.svg"} className={"cursor-pointer"} width={"20"} height={"20"}*/}
                    {/*           alt={"night"}></Image>*/}
                    {/*    <Image src={"/icons/night.svg"} className={"cursor-pointer"} width={"20"} height={"20"}*/}
                    {/*           alt={"night"}></Image>*/}
                    {/*</div>*/}

                    {/* TODO: Night Mode */}
                    {/*<div className={"flex-none flex gap-4"}>*/}
                    {/*    <Image src={"/icons/night.svg"} className={"cursor-pointer"} width={"20"} height={"20"}*/}
                    {/*           alt={"night"}></Image>*/}
                    {/*    <Image src={"/icons/night.svg"} className={"cursor-pointer"} width={"20"} height={"20"}*/}
                    {/*           alt={"night"}></Image>*/}
                    {/*</div>*/}

                </div>

            </div>

            {/*/!* background *!/*/}
            {/*<div className={"blur-sm bg-cover bg-repeat-y bg-center bg-fixed absolute inset-0 opacity-[.02] -z-10"}*/}
            {/*     style={{backgroundImage: "url(/favicon.svg)"}}></div>*/}

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
                                        src={"/images/profile.jpg"}
                                        className={"rounded-3xl"}
                                        height={"180"}
                                        width={"180"}
                                        alt={name}
                                    />
                                </div>
                                <div className={"text-3xl font-extrabold"}>{name}</div>
                                <div className={"text-gray-400"}>{`Control freak.`}</div>
                                <div>UG Student @ <Link href={"https://www.sustech.edu.cn/en/"}><span
                                    className={"link-ina"}>SUSTech</span></Link></div>
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
                                    <Link href={"mailto:jinzx2019@mail.sustech.edu.cn"}>
                                        <div className={"link-ina"}>Contact Me</div>
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
