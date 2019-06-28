import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { PostsService } from '../posts.service'
import { Post } from '../models/post.model';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

    postForm: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private postsService: PostsService
    ) { }

    ngOnInit() {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        })
    }

    onSubmitForm = () => {
        this.postsService.addPost(new Post(
            this.postForm.get('title').value,
            this.postForm.get('content').value
        ))
        this.router.navigate(['posts'])
    }

}
