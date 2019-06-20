import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

    @Input() post: any
    @Output() onLikes = new EventEmitter()
    @Output() onDelete = new EventEmitter()

    constructor() { }

    ngOnInit() {
    }

    balanceLikes = (balance) => this.onLikes.emit({ balance, id: this.post.id })

    deletePost = () => this.onDelete.emit(this.post.id)

}
