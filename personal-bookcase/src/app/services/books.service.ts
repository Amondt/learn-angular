import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Book } from '../models/book.model'
import * as firebase from 'firebase'

@Injectable({
    providedIn: 'root'
})

export class BooksService {

    books: Book[] = []
    bookSubject = new Subject<Book[]>()

    emitBooks = () => this.bookSubject.next(this.books)

    constructor() { this.getBooks() }

    saveBooks = () => firebase.database().ref('/books').set(this.books)

    getBooks = () => firebase.database().ref('/books').on('value', (data: firebase.database.DataSnapshot) => {
        this.books = data.val() ? data.val() : []
        this.emitBooks()
    })

    getSingleBooks = (id: number) => {
        return new Promise((resolve, reject) => {
            firebase.database().ref('/books/' + id).once('value').then(
                (data: firebase.database.DataSnapshot) => resolve(data.val()),
                err => reject(err)
            )
        })
    }

    addNewBook = (newBook: Book) => {
        this.books.push(newBook)
        this.saveBooks()
        this.emitBooks()
    }

    deleteBook = (book: Book) => {
        this.books = this.books.filter(currentBook => currentBook !== book)
        this.saveBooks()
        this.emitBooks()
    }

}
