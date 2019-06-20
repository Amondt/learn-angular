import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class DataService {

    // private url: string = '/assets/data/ninjas.json'
    private url: string = 'https://ninja-book.firebaseio.com/.json'

    constructor(private httpClient: HttpClient) { }

    getNinjas() {
        return this.httpClient.get(this.url)
    }
}