import {Languages} from "../lib/enums";
import Image from "next/image";

export default function LanguageWarningBar({lan}: { lan: Languages }) {
    return (<>
        <div className={"flex m-0 pl-2 py-1 bg-yellow-100 text-gray-500 text-sm rounded items-center gap-x-1.5"}>
            <Image src={"/icons/warning.svg"} alt={"warning"} height={15} width={15}/>
            <div>{lan === Languages.CHN ? "本篇博客的内容不含中文版本。将以默认语言显示。" :
            "This blog does not have English version. It will be shown in the default language."}</div>
        </div>

    </>)
}