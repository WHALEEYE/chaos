import Head from 'next/head'
import Layout, {siteTitle, name} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {GetStaticProps} from 'next'
import styles from "../components/layout.module.css";
import Image from "next/image";
import React from "react";

export default function Home({allPostsData}: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={"grid-cols-3 mx-[5%] grid gap-3 justify-items-start"}>
                {/* Personal Profile on Left */}
                <div className={"grid gap-6"}>
                    <div>
                        <Image
                            priority
                            src={"/images/profile.jpg"}
                            className={"rounded-2xl"}
                            height={144}
                            width={144}
                            alt={name}
                        />
                    </div>

                    <div>
                        <h1 className={"text-4xl font-extrabold justify-self-center"}>{name}</h1>
                    </div>

                    <div className={"grid gap-4"}>
                        <div className={"grid"}>
                            <div><b>Undergraduate</b> student of <br/><b>Southern University of Science and
                                Technology</b></div>
                            <div className={"text-gray-500"}><b>2019.9</b> to <b>Present</b></div>
                        </div>
                        <div>
                            <div><b>Visiting</b> student of <br/><b>University of Wisconsin - Madison</b></div>
                            <div className={"text-gray-500"}><b>2022.9</b> to <b>Present</b></div>

                        </div>
                    </div>

                </div>
                <div className={"col-span-2"}>
                        <h2 className={"text-2xl"}>Blogs</h2>
                        <ul className={utilStyles.list}>
                            {allPostsData.map(({id, date, title}) => (
                                <li className={utilStyles.listItem} key={id}>
                                    <Link href={`/posts/${id}`}>
                                        <a>{title}</a>
                                    </Link>
                                    <br/>
                                    <small className={utilStyles.lightText}>
                                        <Date dateString={date}/>
                                    </small>
                                </li>
                            ))}
                        </ul>
                </div>


            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}


