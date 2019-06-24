import { Component, OnInit } from '@angular/core'
import { PostsService } from './posts.service'
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    
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
        // this.posts = this.postsService.posts
    }
}
