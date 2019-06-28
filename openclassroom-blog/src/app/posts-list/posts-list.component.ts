import { Component, OnInit } from '@angular/core'
import { PostsService } from '../posts.service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

    posts: any[]
    postSubscription: Subscription

    constructor(
        private postsService: PostsService, 
    ) { }

    ngOnInit() {
        this.postSubscription = this.postsService.postSubject.subscribe(
            (posts: any[]) => this.posts = posts
        )
        this.postsService.emitPostSubject()
    }
}
