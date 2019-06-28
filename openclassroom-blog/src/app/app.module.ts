import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { PostComponent } from './post/post.component'
import { NewPostComponent } from './new-post/new-post.component'
import { PostsListComponent } from './posts-list/posts-list.component'
import { HeaderComponent } from './header/header.component'

import { PostsService } from './posts.service'


@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        NewPostComponent,
        PostsListComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [PostsService],
    bootstrap: [AppComponent]
})

export class AppModule { }
