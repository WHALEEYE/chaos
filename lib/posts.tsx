import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from "remark";
import html from 'remark-html';
import {Languages, Sections} from "./enums";

const postsDirectory = path.join(process.cwd(), 'posts');
const languageRE = />>>([A-Z]*)\s*(.*?)>>>/gs;

function parseLanguage(lanString: string) {
    const processedString = lanString.trim().toUpperCase();
    if (processedString.toUpperCase() === "ENG") return Languages.ENG;
    else if (processedString.toUpperCase() === "CHN") return Languages.CHN;
    else throw new Error("Unsupported Language!");
}

export function getSortedPostsData(section: Sections) {
    // Get file names under /posts/{section}
    const sectionDirectory = path.join(postsDirectory, Sections.getPath(section));
    const fileNames = fs.readdirSync(sectionDirectory);
    const allPostsData = [];
    for (const fileName of fileNames) {
        if (!fileName.endsWith(".md")) {
            continue;
        }
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(sectionDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const totalMatterResult = matter(fileContents);

        let titleForAllLan: string[] = new Array(Languages.__LENGTH).fill(null);
        let fallbackLan: Languages | null = null;

        let xArray;
        while (xArray = languageRE.exec(fileContents)) {
            const matterResult = matter(xArray[2].trim());
            const lan = parseLanguage(xArray[1]);
            if (fallbackLan === null) fallbackLan = lan;
            titleForAllLan[lan] = matterResult.data.title;
        }

        if (fallbackLan === null) throw new Error("Failed to retrieve post data!");

        // Combine the data with the id
        allPostsData.push({
            id,
            ...totalMatterResult.data as { date: string, cover: string, featured: boolean },
            fallbackLan,
            titleForAllLan,
        });
    }

    // Sort posts by date
    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) return 1;
        else if (a > b) return -1;
        else return 0;
    });
}

export function getAllPostIds(section: Sections) {
    const fileNames = fs.readdirSync(path.join(postsDirectory, Sections.getPath(section)));
    const ids = [];
    for (const fileName of fileNames) {
        if (fileName.endsWith('.md')) {
            ids.push({params: {id: fileName.replace(/\.md$/, '')}});
        }
    }
    return ids;
}

export async function getPostData(section: Sections, id: string) {
    const fullPath = path.join(postsDirectory, Sections.getPath(section), `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const totalMatterResult = matter(fileContents);

    let contentForAllLan: { title: string, contentHtml: string }[] = new Array(Languages.__LENGTH).fill(null);
    let fallbackLan: Languages | null = null;

    let xArray;
    while (xArray = languageRE.exec(fileContents)) {
        const matterResult = matter(xArray[2].trim());
        const processedContent = await remark().use(html).process(matterResult.content)
        const contentHtml = processedContent.toString();
        const lan = parseLanguage(xArray[1]);
        if (fallbackLan === null) fallbackLan = lan;
        contentForAllLan[lan] = {title: matterResult.data.title, contentHtml}
    }

    if (fallbackLan === null) throw new Error("Failed to retrieve post data!");

    return {
        id,
        ...totalMatterResult.data as { date: string, cover: string, featured: boolean },
        fallbackLan,
        contentForAllLan,
    };
}

export function getLatestPostsData() {
    const sections = [Sections.ARTICLES, Sections.TALKS];

    const allLatestPostsData = sections.map((section) => {
        const sortedPostData = getSortedPostsData(section);
        const latestPostsData = sortedPostData.slice(0, 3);

        return {
            section,
            posts: latestPostsData,
        };
    });

    return allLatestPostsData.sort(({section: a}, {section: b}) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    });
}