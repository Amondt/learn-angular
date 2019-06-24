import { Subject } from 'rxjs/Subject'

export class MonitorService {

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
}