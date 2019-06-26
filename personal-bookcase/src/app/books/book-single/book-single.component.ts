import { Component, OnInit } from '@angular/core'
import { Book } from '../../models/book.model'
import { ActivatedRoute, Router } from '@angular/router'
import { BooksService } from '../../services/books.service'

@Component({
    selector: 'app-book-single',
    templateUrl: './book-single.component.html',
    styleUrls: ['./book-single.component.scss']
})
export class BookSingleComponent implements OnInit {

    book: Book

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private booksService: BooksService
    ) { }

    ngOnInit() {
        this.book = new Book('', '')
        const id = this.route.snapshot.params['id']
        this.booksService.getSingleBooks(+id).then(
            (book: Book) => { this.book = book; console.log(this.book) }
        )
    }

    onBack = () => this.router.navigate(['/books'])

}