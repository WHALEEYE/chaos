import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout'
import React from "react";
import Link from "next/link";
import Showcase from "../components/Showcase";
import {Languages, Sections} from "../lib/enums";


const section = Sections.PROFILE;
const sectionPath = Sections.getPath(section)

export default function Profile({curLan, setCurLan}: {
    curLan: Languages,
    setCurLan: React.Dispatch<React.SetStateAction<Languages>>
}) {
    return (
        <Layout section={section} curLan={curLan} setCurLan={setCurLan}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"grid gap-y-8"}>
                <div>
                    This page is my profile containing some of my brief information. You can check the full CV <Link
                    href={"/CV.pdf"}><span className={"link-ina"}>here</span></Link>.
                </div>
                {/* Education */}
                <Showcase title={"Education"}>
                    <div>
                        <div><b>M.S. in Computer Science</b>, <i>Northwestern University</i></div>
                        <div className={"light-text"}>Sept, 2023 - Dec, 2024 (Expected)</div>
                    </div>
                    <div>
                        <div><b>B.E. in Computer Science and Technology</b>, <i>Southern University of Science and
                            Technology</i></div>
                        <div className={"light-text"}>Graduated Jun, 2023</div>
                    </div>
                    <div>
                        <div><b>Visiting International Student</b>, <i>University of Wisconsin - Madison</i></div>
                        <div className={"light-text"}>Sept, 2022 - Jan, 2023</div>
                    </div>
                </Showcase>

                {/* Research Interests */}
                <Showcase title={"Research Interests"}>
                    <div>Now {`I'm`} mainly interested in some topics in the research fields of computer security,
                        including <b>system security</b>, <b>network security</b> and <b>cloud native security</b>.
                    </div>
                </Showcase>

                {/* Projects */}
                <Showcase title={"Projects"}>
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
                </Showcase>

                {/* Awards */}
                <Showcase title={"Awards"}>
                    <div>
                        <div><b>SUSTech Outstanding Freshman Scholarship</b>, <i>Second-class Award</i></div>
                        <div className={"light-text"}>Jun, 2019</div>
                    </div>
                    <div>
                        <div><b>USTC Hackergame 2021</b>, <i>Rank: 44/2677</i></div>
                        <div className={"light-text"}>Oct, 2021</div>
                    </div>
                    <div>
                        <div><b>Guangdong College Students’ CTF Competition</b>, <i>Rank: 37/504</i></div>
                        <div className={"light-text"}>May, 2022</div>
                    </div>
                    <div>
                        <div><b>SUSTech Outstanding Student Scholarship</b>, <i>Third-class Award</i></div>
                        <div className={"light-text"}>Sept, 2022</div>
                    </div>
                </Showcase>
            </div>
        </Layout>
    )
}


