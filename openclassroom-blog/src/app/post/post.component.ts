import { Component, OnInit, Input } from '@angular/core'
import { PostsService } from '../posts.service'

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

    @Input() post: any

    constructor(private postsService: PostsService) { }

    ngOnInit() {}

    balanceLikes = (balance) => this.postsService.balanceLikes(this.post.id, balance)

    deletePost = () => this.postsService.deletePost(this.post.id)

}
