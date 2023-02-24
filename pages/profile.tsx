import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import React from "react";
import Link from "next/link";
import Card from "../components/card";

export const sectionName = "profile";

export default function Profile() {
    return (
        <Layout section={sectionName}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"grid gap-y-8"}>
                <div>
                    This page is my profile containing some of my brief information. You can check the full CV <Link
                    href={"/CV.pdf"}><span className={"link-ina"}>here</span></Link>.
                </div>
                {/* Education */}
                <Card title={"Education"}>
                    <div>
                        <div><b>Undergraduate Student of Computer Science</b>, <i>Southern University of Science and
                            Technology</i></div>
                        <div className={"light-text"}>2019.9 - 2023.6 (Expected)</div>
                    </div>
                    <div>
                        <div><b>Visiting International Student</b>, <i>University of Wisconsin - Madison</i></div>
                        <div className={"light-text"}>2022.9 - 2023.1</div>
                    </div>
                </Card>

                {/* Research Interests */}
                <Card title={"Research Interests"}>
                    <div>Now {`I'm`} mainly interested in some topics in the research fields of computer security,
                        including <b>system security</b>, <b>network security</b> and <b>cloud native security</b>.
                    </div>
                </Card>

                {/* Projects */}
                <Card title={"Projects"}>
                    <div>
                        <Link href={"https://github.com/WHALEEYE/weave-editor"}>
                            <span className={"link-header"}>Weave Editor</span>
                        </Link>
                        <div className={"light-text"}>
                            <div>An East-West Traffic Capturing and Auto Policy Generating System for Kubernetes.</div>
                            <div>
                                This is a cloud native security research project supervised by Prof. Yan Chen of NWU.
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={"https://github.com/dandansamax/SPL-Compiler"}>
                            <span className={"link-header"}>SPL Compiler</span>
                        </Link>
                        <div className={"light-text"}>
                            <div>A compiler for SPL, which is short for SUSTech Programming Language.</div>
                            <div>This is the course project of Compilers.</div>
                        </div>
                    </div>
                    <div>
                        <Link href={"https://github.com/WHALEEYE/Hash-Checker"}>
                            <span className={"link-header"}>Hash Checker for Web Applications</span>
                        </Link>
                        <div className={"light-text"}>
                            <div>
                                A lightweight plugin to detect pages containing Wasm and trace them to avoid threats
                                like cryptocurrency mining.
                            </div>
                            <div>This is the course project of Computer Security.</div>
                        </div>
                    </div>
                    <div>
                        <Link href={"https://github.com/WHALEEYE/SUSTech-Store-Backend"}>
                            <span className={"link-header"}>SUSTech Store</span>
                        </Link>
                        <div className={"light-text"}>
                            <div>A second-hand trading platform for SUSTech students.</div>
                            <div>This is the course project of Object-Oriented Analysis and Design.</div>
                        </div>
                    </div>
                </Card>

                {/* Awards */}
                <Card title={"Awards"}>
                    <div>
                        <div><b>SUSTech Outstanding Freshman Scholarship</b>, <i>Second-class Award</i></div>
                        <div className={"light-text"}>2019.6</div>
                    </div>
                    <div>
                        <div><b>USTC Hackergame 2021</b>, <i>Rank: 44/2677</i></div>
                        <div className={"light-text"}>2021.10</div>
                    </div>
                    <div>
                        <div><b>Guangdong College Students’ CTF Competition</b>, <i>Rank: 37/504</i></div>
                        <div className={"light-text"}>2022.5</div>
                    </div>
                    <div>
                        <div><b>SUSTech Outstanding Student Scholarship</b>, <i>Third-class Award</i></div>
                        <div className={"light-text"}>2022.9</div>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}


