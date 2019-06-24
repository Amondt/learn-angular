import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MonitorViewComponent } from './monitor-view/monitor-view.component'
import { AuthComponent } from './auth/auth.component'
import { SingleMonitorComponent} from './single-monitor/single-monitor.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    { path: 'monitors', canActivate: [AuthGuardService], component: MonitorViewComponent },
    { path: 'monitors/:id', canActivate: [AuthGuardService], component: SingleMonitorComponent },
    { path: 'auth', component: AuthComponent },
    { path: '', component: MonitorViewComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
