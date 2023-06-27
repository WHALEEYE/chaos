import assert from "assert";

export enum Languages {
    ENG,
    CHN,
    __LENGTH,
}

export enum Sections {
    HOME = 0,
    PROFILE = 1,
    ARTICLES = 2,
    TALKS = 3,
    FRIENDS = 4,
    __LENGTH,
}

export namespace Sections {

    const enNames = ["Home", "Profile", "Articles", "Talks", "Friends"];
    const cnNames = ["主页", "简介", "文章", "杂谈", "友链"];
    const paths = ["home", "profile", "articles", "talks", "friends"];

    export function getName(section: Sections, curLan: Languages) {
        return curLan === Languages.CHN ? cnNames[section] : enNames[section];
    }

    export function getPath(section: Sections) {
        return paths[section];
    }
}