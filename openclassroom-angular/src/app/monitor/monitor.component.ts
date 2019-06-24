import { Component, OnInit, Input } from '@angular/core'
import { MonitorService } from '../services/monitor.service'

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

    @Input() monitorName: string
    @Input() monitorStatus: string
    @Input() monitorId: number
    @Input() index: number

    constructor(private monitorService: MonitorService) { }

    ngOnInit() {
    }

    getStatus = () => this.monitorStatus

    getColor = () => this.monitorStatus === 'On' ? 'green' : 'red'

    onSwitch = () => {
        if (this.monitorStatus === "On") {
            this.monitorService.switchOffOne(this.index)
        } else if (this.monitorStatus === "Off") {
            this.monitorService.switchOnOne(this.index)
        }
    }

}
