import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import {GetStaticPaths, GetStaticProps} from "next";
import {sectionName} from "./index"

export default function Post({postData}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (<Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <div className={"article-content"}>
            <h1 className={"heading-xl"}>{postData.title}</h1>
            <div className={"light-text"}>
                <Date dateString={postData.date}/>
            </div>
            <br/>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            <br/>
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
