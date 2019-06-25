import { Subject } from 'rxjs/Subject'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class MonitorService {

    constructor (private httpClient: HttpClient) {}

    monitorSubject = new Subject<any[]>()

    private monitors = [
        { id: 1, name: "Monitor 1", status: "Off"},
        { id: 2, name: "Monitor 2", status: "On"},
        { id: 3, name: "Monitor 3", status: "Off"},
    ]

    private lastId = 3

    emitMonitorSubject = () => {
        this.monitorSubject.next(this.monitors.slice())
    }

    switchOnAll = () => {
        this.monitors.forEach(monitor => monitor.status = "On")
        this.emitMonitorSubject()
    }

    switchOffAll = () => {
        this.monitors.forEach(monitor => monitor.status = "Off")
        this.emitMonitorSubject()
    }

    switchOnOne = (index: number) => {
        this.monitors[index].status = "On"
        this.emitMonitorSubject()
    }

    switchOffOne = (index: number) => {
        this.monitors[index].status = "Off"
        this.emitMonitorSubject()
    }

    getMonitorById = (id: number) => {
        return this.monitors.find(monitor => monitor.id === id)
    }

    addNewMonitor = (name: string, status: string) => {
        this.lastId += 1
        this.monitors.push({
            id: this.lastId,
            name,
            status
        })
        console.log(this.monitors)
        this.emitMonitorSubject()
    }

    saveMonitorsToServer = () => {
        this.httpClient.put('https://openclassroom-monitor-list.firebaseio.com/monitors.json', this.monitors).subscribe(
            () => console.log('Monitors saved on the server'),
            err => console.log(err)
        )
    }

    getMonitorsFromServer = () => {
        this.httpClient.get<any[]>('https://openclassroom-monitor-list.firebaseio.com/monitors.json').subscribe(
            res => {
                console.log('Monitors retrieved from the server')
                this.monitors = res
                this.emitMonitorSubject()
            },
            err => console.log(err)
        )
    }
}