import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

    @Input() monitorName: string
    @Input() monitorStatus: string

    constructor() { }

    ngOnInit() {
    }

    getStatus = () => this.monitorStatus

    getColor = () => this.monitorStatus === 'On' ? 'green' : 'red'

}
