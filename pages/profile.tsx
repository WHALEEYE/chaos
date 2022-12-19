import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import React from "react";

export const sectionName = "profile";

export default function Home() {
    return (
        <Layout section={sectionName}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Education */}
            <div>
                <div className={"heading-2xl"}>Education</div>
                <div className={"leading-loose"}>
                    <div className={"grid gap-y-1"}>
                        <div><b>Undergraduate</b> student of <br/><b>Southern University of Science and
                            Technology</b></div>
                        <div className={"text-gray-400 text-sm"}><b>2019.9</b> to <b>Present</b></div>
                    </div>
                    <div className={"grid gap-y-1"}>
                        <div><b>Visiting</b> student of <br/><b>University of Wisconsin - Madison</b>
                        </div>
                        <div className={"text-gray-400 text-sm"}><b>2022.9</b> to <b>Present</b></div>
                    </div>
                </div>
            </div>

            <div className={"grid gap-y-12"}>
            </div>
        </Layout>
    )
}


