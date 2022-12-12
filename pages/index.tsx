import Head from 'next/head'
import Layout, {name, siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getLatestPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {GetStaticProps} from 'next'
import Image from "next/image";
import React from "react";

export default function Home({allLatestPostsData}: {
    allLatestPostsData: {
        section: string
        posts: {
            date: string
            title: string
            id: string
        }[]
    }[]
}) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={"grid-cols-4 grid gap-3 justify-items-start"}>
                {/* Personal Profile on Left */}
                <div className={"grid col-span-1 gap-y-8 mt-[18px]"}>
                    <div>
                        <Image
                            priority
                            src={"/images/profile.jpg"}
                            className={"rounded-2xl"}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={"text-3xl font-extrabold justify-self-center"}>{name}</h1>
                    </div>

                    <div>Researching on <b>System Security</b> and <b>Network Security</b></div>

                    <div className={"grid gap-3"}>
                        <div className={"grid"}>
                            <div><b>Undergraduate</b> student of <br/><b>Southern University of Science and
                                Technology</b></div>
                            <div className={"text-gray-400 text-sm"}><b>2019.9</b> to <b>Present</b></div>
                        </div>
                        <div>
                            <div><b>Visiting</b> student of <br/><b>University of Wisconsin - Madison</b></div>
                            <div className={"text-gray-400 text-sm"}><b>2022.9</b> to <b>Present</b></div>
                        </div>
                    </div>

                </div>

                {/* Brief information on the right */}
                <div className={"grid col-span-3 ml-20 gap-y-4"}>
                    {/* bios */}
                    <div className={"leading-normal"}>
                        <p>Hello there! Welcome to CHAOS, my personal blog.</p>
                        <p>The articles about academic and technical topics will be collected in <Link
                            href={"/articles"}><span
                            className={"link-ina"}>articles</span></Link>, and those about casual, miscellaneous topics
                            can be seen in <Link href={"/talks"}><span className={"link-ina"}>talks</span></Link>. Feel
                            free to take a look at them.</p>
                        <p>You can see my CV <Link href={"/CV.pdf"}><span className={"link-ina"}>here</span></Link> if
                            interested.</p>
                        <p>Have a good time! =)</p>
                    </div>
                    {/* Latest */}
                    <div className={"grid gap-y-12"}>
                        {allLatestPostsData.map(({section, posts}) => (
                            <div key={section}>
                                <div className={"text-2xl font-black mb-3"}>
                                    Latest {section.charAt(0).toUpperCase() + section.slice(1)}
                                </div>
                                <div className={"grid gap-3"}>
                                    {posts.map(({id, date, title}) => (
                                        <div className={"list-none leading-relaxed"} key={id}>
                                            <Link href={`/${section}/${id}`}>
                                                <span className={"link-ina"}>{title}</span>
                                            </Link>
                                            <br/>
                                            <small className={utilStyles.lightText}>
                                                <Date dateString={date}/>
                                            </small>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allLatestPostsData = getLatestPostsData()
    return {
        props: {
            allLatestPostsData
        }
    }
}


