import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import enArticles from '../locales/en/articles.json';
import enFriends from '../locales/en/friends.json';
import enIndex from '../locales/en/index.json';
import enLayout from '../locales/en/layout.json';
import enProfile from '../locales/en/profile.json';
import enTalks from '../locales/en/talks.json';
import zhArticles from '../locales/zh/articles.json';
import zhFriends from '../locales/zh/friends.json';
import zhIndex from '../locales/zh/index.json';
import zhLayout from '../locales/zh/layout.json';
import zhProfile from '../locales/zh/profile.json';
import zhTalks from '../locales/zh/talks.json';

const resources = {
    en: {
        articles: enArticles,
        friends: enFriends,
        index: enIndex,
        layout: enLayout,
        profile: enProfile,
        talks: enTalks
    },
    zh: {
        articles: zhArticles,
        friends: zhFriends,
        index: zhIndex,
        layout: zhLayout,
        profile: zhProfile,
        talks: zhTalks
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    }).then();

export default i18n;