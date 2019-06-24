import { Subject } from 'rxjs/Subject'

export class MonitorService {

    monitorSubject = new Subject<any[]>()

    private monitors = [
        { id: 1, name: "Monitor 1", status: "Off"},
        { id: 2, name: "Monitor 2", status: "On"},
        { id: 3, name: "Monitor 3", status: "Off"},
    ]

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
}