import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from "remark";
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(section: string) {
    // Get file names under /posts/{section}
    const sectionDirectory = path.join(postsDirectory, section);
    const fileNames = fs.readdirSync(sectionDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(sectionDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as { date: string, title: string }),
        };
    });
    // Sort articles by date
    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getAllPostIds(section: string) {
    const fileNames = fs.readdirSync(path.join(postsDirectory, section));
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

function getAllSections() {
    const fileNames = fs.readdirSync(postsDirectory);
    const sections = [];

    for (const fileName of fileNames) {
        if (fs.lstatSync(path.join(postsDirectory, fileName)).isDirectory()) {
            sections.push(fileName);
        }
    }

    return sections;
}

export async function getPostData(section: string, id: string) {
    const fullPath = path.join(postsDirectory, section, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string, title: string }),
    };
}

export function getLatestPostsData() {
    // Get all directory under /posts
    const sections = getAllSections();

    const allLatestPostsData = sections.map((section) => {
        const sortedPostData = getSortedPostsData(section);
        const latestPostsData = sortedPostData.slice(0, 3);

        return {
            section: section,
            posts: latestPostsData,
        };
    });

    return allLatestPostsData.sort(({section: a}, {section: b}) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
}