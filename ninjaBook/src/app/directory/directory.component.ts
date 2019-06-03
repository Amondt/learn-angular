import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-directory',
    templateUrl: './directory.component.html',
    styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

    ninjas
    filteredNinjas

    filterNinjas(value) {
        this.filteredNinjas = this.ninjas.filter(ninja => {
            return ninja.name.toLowerCase().includes(value.toLowerCase())
        })
    }

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getNinjas().subscribe(
            data => {
                this.ninjas = data
                this.filteredNinjas = data
            },
            err => console.log(err)
        )
        this.filteredNinjas = this.ninjas
    }

}
