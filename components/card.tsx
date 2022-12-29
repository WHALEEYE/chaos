import React, {ReactNode} from "react";

export default function Card({children, title}: {
    children: ReactNode, title: string
}) {
    return (
        <div className={"grid gap-y-2"}>
            <div className={"heading-2xl"}>{title}</div>
            <div className={"grid gap-y-2"}>{children}</div>
        </div>
    )
}
