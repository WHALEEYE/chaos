import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import {GetStaticPaths, GetStaticProps} from "next";
import {sectionName} from "./index"
import Image from "next/image";
import {Languages} from "../../lib/enums";
import React from "react";

export default function Post({postData, curLan, setCurLan}: {
    postData: {
        id: string
        title: string
        date: string
        contentHtml: string
        cover: string
    },
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    const coverURL = `/figures/${sectionName}/${postData.id}/${postData.cover}`
    return (<Layout setCurLan={setCurLan}>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <Image src={coverURL} width={1920} height={1080} alt={"cover"}/>
        <div className={"article-content"}>
            <div>
                <h1 className={"mt-0 mb-2"}>{postData.title}</h1>
                <div className={"light-text"}>
                    <Date dateString={postData.date}/>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </div>
    </Layout>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(sectionName);
    return {
        paths, fallback: false,
    };
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(sectionName, params?.id as string)
    return {
        props: {
            postData,
        }
    };
}
