import { Component } from '@angular/core'
import * as firebase from 'firebase'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor () {
        var firebaseConfig = {
            apiKey: "AIzaSyCAKKqoRwILE3__W0VJmurloSJ83lSUffk",
            authDomain: "books-showcase.firebaseapp.com",
            databaseURL: "https://books-showcase.firebaseio.com",
            projectId: "books-showcase",
            storageBucket: "books-showcase.appspot.com",
            messagingSenderId: "997971690305",
            appId: "1:997971690305:web:874a2fe04a95ae38"
        }
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
    }
}
