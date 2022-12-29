import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import React, {ReactNode} from "react";
import Script from "next/script";

export const name = 'Isaac Jin';
export const siteTitle = 'CHAOS';

const isDev = process.env.NODE_ENV === 'development'

export default function Layout({children, section}: {
    children: ReactNode, section?: string
}) {

    const profileButton = (section === "profile") ?
        <div className={"navi-selected"}>Profile</div> :
        <Link href={"/profile"}>
            <div className={"navi-unselected hover:navi-selected"}>Profile</div>
        </Link>

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
                className={"backdrop-blur-lg border-b border-gray-700/20 select-none fixed h-10 inset-x-0 z-10 gap-x-10 flex justify-center"}>
                <div className={"flex justify-end grow max-w-[1200px]"}>
                    <div className={"flex items-center grow align-self-start"}>
                        <Link href={"/"}>
                            <div className={"cursor-pointer flex gap-2 text-black hover:text-[#996E5C]"}>
                                <Image src={"/favicon.svg"} width={"28"} height={"28"} alt={"icon"}></Image>
                                <div className={"font-extrabold text-2xl"}>{siteTitle}</div>
                            </div>
                        </Link>
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

                </div>

            </div>

            {/* background */}
            <div className={"blur-sm bg-cover bg-repeat-y bg-center bg-fixed absolute inset-0 opacity-[.02] -z-10"}
                 style={{backgroundImage: "url(/favicon.svg)"}}></div>

            <div className={"mt-20 mb-10 flex justify-center select-none"}>
                <div className={"grid-cols-5 grid gap-3 max-w-[1200px] grow"}>
                    {/* Personal Profile on Left */}
                    <div>
                        <div className={"grid border-r fixed max-w-[250px] w-[17%] pr-4 top-20 bottom-10 content-between"}>
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
                                <div>Visiting Student<br/>@ <Link href={"https://www.wisc.edu"}><span
                                    className={"link-ina"}>UW - Madison</span></Link></div>
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
                                        <div className={"link-ina"}>Contact me</div>
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


            {/* TODO: delete this part of code when the blog is finished */}
            {!isDev && (<div className={"grid z-20 opacity-95 bg-black absolute inset-0 p-20 gap-y-15"}>
                <div>
                    <h1 className={utilStyles.title}>
                        Welcome to Chaos.
                    </h1>

                    <h1 className={utilStyles.subtitle}>The End of My Cosmic Mind</h1>
                </div>


                <div>
                    <Script src={"https://cdn.logwork.com/widget/countdown.js"} strategy={"afterInteractive"}></Script>
                    <a href="https://logwork.com/countdown-79iv" className="countdown-timer" data-style="circles"
                       data-date="2023-02-01 23:59" data-background="#00f9ee"
                       data-unitscolor="#ababab"
                       data-textcolor="#ababab">Open In</a>
                </div>

            </div>)}

        </div>
    );
}
