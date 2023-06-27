import Layout from "../../components/Layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import {GetStaticPaths, GetStaticProps} from "next";
import {section} from "./index"
import Image from "next/image";
import {Languages, Sections} from "../../lib/enums";
import React from "react";
import LanguageWarningBar from "../../components/LanguageWarningBar";

const sectionPath = Sections.getPath(section);

export default function Post({postData, curLan, setCurLan}: {
    postData: {
        id: string,
        date: string,
        cover: string,
        featured: boolean,
        fallbackLan: Languages,
        contentForAllLan: { title: string, contentHtml: string }[],
    },
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    let languageNotSupported = true;
    let curPostData = postData.contentForAllLan[postData.fallbackLan];
    if (postData.contentForAllLan[curLan] !== null) {
        curPostData = postData.contentForAllLan[curLan];
        languageNotSupported = false;
    }

    const coverURL = `/figures/${sectionPath}/${postData.id}/${postData.cover}`
    return (<Layout curLan={curLan} setCurLan={setCurLan}>
        <Head>
            <title>{curPostData.title}</title>
        </Head>
        <Image src={coverURL} width={1920} height={1080} alt={"cover"}/>
        <div className={"blog-content"}>
            <div>
                {languageNotSupported && <LanguageWarningBar lan={curLan}/>}
                <h1 className={"mt-0 mb-2"}>{curPostData.title}</h1>
                <div className={"light-text"}>
                    <Date dateString={postData.date} lan={curLan}/>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: curPostData.contentHtml}}/>
        </div>
    </Layout>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(section);
    return {
        paths, fallback: false,
    };
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(section, params?.id as string)
    return {
        props: {
            postData,
        }
    };
}
