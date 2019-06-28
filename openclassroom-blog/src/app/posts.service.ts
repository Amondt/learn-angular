import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Post } from './models/post.model'
import * as firebase from 'firebase'

@Injectable({
    providedIn: 'root'
})

export class PostsService {

    posts: Post[] = []
    postSubject = new Subject<any[]>()

    // Retrieve posts on init from firebase
    constructor() { this.getPosts() }

    // Firebase sync functions
    savePosts = () => firebase.database().ref('/posts').set(this.posts)

    getPosts = () => firebase.database().ref('/posts').on('value', (data: firebase.database.DataSnapshot) => {
        this.posts = data.val() ?  data.val() : []
        this.emitPostSubject()
    })

    // Observable emit changes
    emitPostSubject() {
        this.postSubject.next(this.posts)
    }

    // Core functions of the app
    balanceLikes = (id, value) => {
        this.posts.forEach(post => {
            if (post.id === id) {
                post.likes += value
                console.log('id: ' + post.id + ' -- ' + post.likes + ' likes')
            }
        })
        this.savePosts()
        this.emitPostSubject()
    }

    deletePost = (id) => {
        this.posts = this.posts.filter(post => post.id !== id)
        this.savePosts()
        this.emitPostSubject()
        console.log('post with id ', id, 'deleted')
    }

    addPost = (post: Post) => {
        post.id = new Date().getTime() + Math.floor(Math.random() * 100000)
        post.createdAt = new Date().getTime()
        post.likes = 0
        this.posts.push(post)

        this.savePosts()
        this.emitPostSubject()
        console.log('post added -- ', post)
    }
}
