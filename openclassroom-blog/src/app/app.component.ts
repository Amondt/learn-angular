import { Component, OnInit } from '@angular/core'
import * as firebase from 'firebase'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor(
    ) {
        var firebaseConfig = {
            apiKey: "AIzaSyDcgtNUq75wIyEDj2-GuFVjN_9DlAO_AVM",
            authDomain: "openclassroom-blog-704c2.firebaseapp.com",
            databaseURL: "https://openclassroom-blog-704c2.firebaseio.com",
            projectId: "openclassroom-blog-704c2",
            storageBucket: "openclassroom-blog-704c2.appspot.com",
            messagingSenderId: "1017708455775",
            appId: "1:1017708455775:web:f5a078cf1f8968f5"
        }
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
    }

    ngOnInit() {
    }
}
