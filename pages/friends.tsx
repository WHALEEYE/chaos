import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import React from "react";

export const sectionName = "friends";

export default function Home() {
    return (
        <Layout section={sectionName}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            {/* Brief information on the right */}
            <div className={"grid gap-y-4"}>

                <div className={"leading-normal"}>
                    <p>These are my friends!</p>
                </div>

                <div className={"grid gap-y-12"}>
                </div>
            </div>
        </Layout>
    )
}


