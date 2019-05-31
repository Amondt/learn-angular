import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directory',
    templateUrl: './directory.component.html',
    styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
    ninjas = [
        { name: 'Yoshi', belt: 'black'},
        { name: 'Ryu', belt: 'red'},
        { name: 'Crystal', belt: 'purple'},
    ]
    filteredNinjas = []
    searchInput: string

    filterNinjas(value) {
        console.log(value)
        this.filteredNinjas = this.ninjas.filter(ninja => {
            return ninja.name.toLowerCase().includes(value.toLowerCase())
        })
    }

    constructor() { }

    ngOnInit() {
        this.filteredNinjas = this.ninjas
    }

}
