import React from "react";

export default function Post({children, title, subtitle, date, contentHtml}: {
    children: React.ReactNode, title: string, subtitle?: string, date: string, contentHtml: string
}) {
    return (
        <div className={"heading-xl"}>{title}</div>

    );
}