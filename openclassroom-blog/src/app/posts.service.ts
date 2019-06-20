import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class PostsService {

    posts = [
        {
            id: 1,
            title: "My first post",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit nec neque dignissim consequat. Sed aliquam venenatis enim. Donec nec euismod metus. Vivamus auctor neque a magna imperdiet, a accumsan risus ullamcorper. Nulla facilisi. Nam lobortis, dolor eget commodo scelerisque, massa elit lobortis ex, non pretium risus mauris nec diam. Etiam eu congue lorem. Suspendisse tincidunt quam sed ligula sagittis ultrices. Fusce purus neque, cursus vel elit ut, imperdiet sodales dui. Duis justo neque, finibus vel libero ac, facilisis feugiat nibh. Phasellus vitae metus non elit varius vehicula. Nunc malesuada arcu at dignissim vulputate",
            likes: 4,
            createdAt: new Date()
        },
        {
            id: 2,
            title: "My second post",
            content: "Ut dolor odio, sodales et facilisis vel, convallis vel eros. Suspendisse ac tincidunt metus. Donec velit orci, consequat blandit rhoncus vitae, consequat vitae sapien. In ornare, neque non accumsan semper, odio nulla aliquet odio, at accumsan tortor lacus vehicula ligula. Maecenas imperdiet in ligula sed congue. Integer at justo bibendum, posuere sapien molestie, placerat nisl. Suspendisse vel ipsum sit amet lectus condimentum lacinia. Nulla vestibulum facilisis est vitae venenatis. Etiam congue lorem et dignissim vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Proin turpis mi, aliquet dapibus velit eu, luctus dapibus lectus. Integer nec eleifend ipsum. Integer tristique, erat in sollicitudin viverra, eros eros consectetur nunc, eget tempor libero erat vel orci.",
            likes: 0,
            createdAt: new Date()
        },
        {
            id: 3,
            title: "My third post",
            content: "Sed dictum congue urna, eget sollicitudin tellus ultrices eu. Pellentesque at ligula et erat cursus feugiat. Mauris interdum quam in semper dapibus. Vestibulum gravida magna non quam congue bibendum. Fusce id quam fringilla, tristique justo eu, laoreet odio. Phasellus tempus metus ac malesuada cursus. Proin suscipit, lacus quis blandit hendrerit, libero arcu condimentum ante, sollicitudin hendrerit elit ante sit amet felis. Ut eget magna non magna consectetur placerat. Sed finibus ex eget ultrices euismod. Aenean a fringilla justo, sed dignissim urna. Proin in finibus velit. Nulla fringilla semper interdum. Pellentesque vestibulum euismod felis, nec porttitor nunc congue elementum.",
            likes: -1,
            createdAt: new Date()
        },
    ]

    constructor() {}

    getPosts = () => this.posts

    balanceLikes = (id, value) => {
        this.posts.forEach(post => {
            if (post.id === id) {
                post.likes += value
            }
        })
    }

    deletePost = (id) => this.posts = this.posts.filter(post => post.id !== id)
}
