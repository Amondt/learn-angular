import { Component, OnInit } from '@angular/core'
import { PostsService } from './posts.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [PostsService]
})

export class AppComponent implements OnInit {
    
    posts: any

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.posts = this.postsService.getPosts()
    }

    balanceLikes = e => {
        this.postsService.balanceLikes(e.id, e.balance)
        this.posts = this.postsService.getPosts()
    }

    deletePost = e => {
        this.postsService.deletePost(e)
        this.posts = this.postsService.getPosts()
    }
}
