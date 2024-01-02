import Link from "next/link";

export default function ProjectDetail({projectName, projectDesc, githubLink}: {
    projectName: string,
    projectDesc: string[],
    githubLink: string
}) {
    return (
        <div>
            <Link href={githubLink}>
                <span className={"link-header"}>{projectName}</span>
            </Link>
            <div className={"light-text"}>
                {projectDesc.map((desc, index) => (
                    <div key={index}>{desc}</div>
                ))}
            </div>
        </div>
    );
}
