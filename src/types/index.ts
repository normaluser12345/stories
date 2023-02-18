export interface BaseTabStory {
    id: number
}

type Media = {
    mediaTitle: string
    mediaSubtitle?: string
}
type Article = {
    articleTitle: string
    articleSubtitle?: string
}
type Course = {
    courseTitle: string
    courseSubtitle?: string
}

export type BaseQueryPage = {
    id: number
    title?: string
}

export type MediaQueryPage = BaseQueryPage & {
    data?: Media[]
}
export type ArticleQueryPage = BaseQueryPage & {
    data?: Article[]
}
export type CourseQueryPage = BaseQueryPage & {
    data?: Course[]
}

export type PageQueryType = 'media' | 'articles' | 'courses'

export type StatusState = 'idle' | 'loading' | 'fulfilled' | 'error'

export interface IStory {
    id: string
    title: string
    subtitle?: string
    backgroundImage?: string
}