import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PostComponent } from './post/post.component'
import { PostsService } from './posts.service'

@NgModule({
    declarations: [
        AppComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [PostsService],
    bootstrap: [AppComponent]
})

export class AppModule { }
