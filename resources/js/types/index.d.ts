export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface NewsProps {
    imgUrl: string;
    author: string;
    date: string;
    title: string;
    category: string;
    readTime: string;
}

export interface StoriesProps {
    imgUrl: string;
    title: string;
    text: string;
    category: string;
    readTime: string;
}
