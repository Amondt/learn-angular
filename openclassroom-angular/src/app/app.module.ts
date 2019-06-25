import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MonitorComponent,
        AuthComponent,
        MonitorViewComponent,
        SingleMonitorComponent,
        NotFoundComponent,
        CreateMonitorComponent,
        UserListComponent,
        NewUserComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [MonitorService, AuthService, AuthGuardService, UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }
