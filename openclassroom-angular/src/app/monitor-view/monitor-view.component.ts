import { Component, OnInit, OnDestroy } from '@angular/core'
import { MonitorService } from '../services/monitor.service'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-monitor-view',
  templateUrl: './monitor-view.component.html',
  styleUrls: ['./monitor-view.component.scss']
})
export class MonitorViewComponent implements OnInit, OnDestroy {

    isAuth = false
    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date()
        setTimeout(
            () => {
                resolve(date)
            }, 2000
        )
    })

    monitors: any[]
    monitorsSubscription: Subscription

    constructor(private monitorService: MonitorService) {
    }

    ngOnInit() {
        this.monitorsSubscription = this.monitorService.monitorSubject.subscribe(
            (monitors: any[]) => this.monitors = monitors
        )
        this.monitorService.emitMonitorSubject()
        // this.monitors = this.monitorService.monitors
    }

    onSwitchOnAll = () => this.monitorService.switchOnAll()

    onSwitchOffAll = () => {
        if(confirm("Are you sure you want to switch off all ?")) {
            this.monitorService.switchOffAll()
        }
    }

    onSave = () => this.monitorService.saveMonitorsToServer()

    onFetch = () => this.monitorService.getMonitorsFromServer()

    ngOnDestroy(): void {
        this.monitorsSubscription.unsubscribe()
    }
}
