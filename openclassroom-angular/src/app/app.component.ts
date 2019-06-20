import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    isAuth = false
    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date()
        setTimeout(
            () => {
                resolve(date)
            }, 2000
        )
    })
    // lastUpdate = new Date()

    monitors = [
        { name: "Monitor 1", status: "Off"},
        { name: "Monitor 2", status: "On"},
        { name: "Monitor 3", status: "Off"},
    ]

    constructor() {
        setTimeout(
            () => {
                this.isAuth = true
            }, 4000
        )
    }

    onLightUp = () => {
        console.log('Lights up everything')
    }
}
