import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AuthService } from './services/auth.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MonitorComponent } from './monitor/monitor.component'
import { MonitorService } from './services/monitor.service'
import { AuthComponent } from './auth/auth.component'
import { MonitorViewComponent } from './monitor-view/monitor-view.component'
import { SingleMonitorComponent } from './single-monitor/single-monitor.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { AuthGuardService } from './services/auth-guard.service';
import { CreateMonitorComponent } from './create-monitor/create-monitor.component';

@NgModule({
    declarations: [
        AppComponent,
        MonitorComponent,
        AuthComponent,
        MonitorViewComponent,
        SingleMonitorComponent,
        NotFoundComponent,
        CreateMonitorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [MonitorService, AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})

export class AppModule { }
