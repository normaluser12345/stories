import { IStory } from "../../../types"

export enum TabCardsTag {
    Media = 'media',
    Articles = 'articles',
    Courses = 'courses',
}

export enum TabIds {
    Articles = '1',
    Courses = '2',
    Media = '3',
}

export enum TabCardsTitles {
    Articles = 'Статьи',
    Courses = 'Курсы',
    Media = 'Медиа',
}

export type TabCardsTags = TabCardsTag.Media | TabCardsTag.Articles | TabCardsTag.Courses

export type TabTitles = TabCardsTitles.Articles | TabCardsTitles.Courses | TabCardsTitles.Media

export type BaseTabCard = {
    id: TabIds
    isOpen: boolean
    data?: IStory[]
    contentLength?: number
}

export type ArticleTabCard = BaseTabCard & {
    id: TabIds.Articles
    title: TabCardsTitles.Articles
    tag: TabCardsTag.Articles
}
export type CourseTabCard = BaseTabCard & {
    id: TabIds.Courses
    title: TabCardsTitles.Courses
    tag: TabCardsTag.Courses
}
export type MediaTabCard = BaseTabCard & {
    id: TabIds.Media
    title: TabCardsTitles.Media
    tag: TabCardsTag.Media
}

export type TabCardType = ArticleTabCard | CourseTabCard | MediaTabCard

