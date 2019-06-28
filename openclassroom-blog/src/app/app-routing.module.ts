import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PostsListComponent } from './posts-list/posts-list.component'
import { NewPostComponent } from './new-post/new-post.component'

const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostsListComponent },
    { path: 'new', component: NewPostComponent },
    { path: '**', redirectTo: 'posts' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
