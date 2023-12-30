import React from "react";
import Date from "./Date";
import Image from "next/image";
import Link from "next/link";
import {Languages} from "../lib/enums";

export default function SmallCard({title, dateString, sectionPath, id, coverString, curLan}: {
    title: string, dateString: string, sectionPath: string, id: string, coverString: string, curLan: Languages
}) {
    let coverURL = `/figures/${sectionPath}/${id}/${coverString}`
    let blogURL = `/${sectionPath}/${id}`
    return (
        <Link href={blogURL}>
            <div
                className={"transition-all hover:duration-250 ease-in-out p-2 grid grid-cols-3 justify-between rounded gap-x-4 hover:text-[#996E5C] hover:cursor-pointer hover:bg-gradient-to-r hover:from-gray-600/5 shadow hover:shadow-lg"}>
                <div className={"grid col-span-2 content-between"}>
                    <div className={"font-bold text-lg"}>{title}</div>
                    <div className={"light-text"}>
                        <Date dateString={dateString} lan={curLan}/>
                    </div>
                </div>
                <div className={"grid justify-end relative w-full aspect-video"}>
                    <Image src={coverURL} fill alt={title + " image"}/>
                </div>
            </div>
        </Link>
    )
}