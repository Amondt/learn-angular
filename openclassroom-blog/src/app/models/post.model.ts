export class Post {
    createdAt: number
    likes: number
    id: number
    constructor (
        public title: string,
        public content: string,
    ) {}
}