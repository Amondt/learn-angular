import { Injectable } from '@angular/core'
import { User } from '../models/user.model'
import { Subject } from 'rxjs/Subject'

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private users: User[] = [
        new User('Alex', 'Mondt', 'alex@gmail.com', 'Doctor pepper', ['music'])
    ]
    userSubject = new Subject<User[]>()

    emitUsers = () => {
        this.userSubject.next(this.users.slice())
    }

    constructor() { }

    addUser = (user: User) => {
        this.users.push(user)
        this.emitUsers()
    }
}
