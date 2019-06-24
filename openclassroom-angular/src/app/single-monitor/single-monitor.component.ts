import { Component, OnInit } from '@angular/core'
import { MonitorService } from '../services/monitor.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-single-monitor',
    templateUrl: './single-monitor.component.html',
    styleUrls: ['./single-monitor.component.scss']
})

export class SingleMonitorComponent implements OnInit {

    name: string = 'test monit'
    status: string = 'On'

    constructor(
        private monitorService: MonitorService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id']
        this.name = this.monitorService.getMonitorById(+id).name
        this.status = this.monitorService.getMonitorById(+id).status
    }
}
