import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { MonitorService } from '../services/monitor.service'

@Component({
    selector: 'app-create-monitor',
    templateUrl: './create-monitor.component.html',
    styleUrls: ['./create-monitor.component.scss']
})

export class CreateMonitorComponent implements OnInit {

    defaultMonitorState: string = 'Off'

    constructor(
        private monitorService: MonitorService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onSubmit = (form: NgForm) => {
        const name = form.value['name']
        const status = form.value['status']
        console.log(form.value)
        this.monitorService.addNewMonitor(name, status)
        this.router.navigate(['/monitors'])
    }

}
