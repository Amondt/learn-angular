import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SigninComponent } from './auth/signin/signin.component'
import { SignupComponent } from './auth/signup/signup.component'
import { BookListComponent } from './books/book-list/book-list.component'
import { BookFormComponent } from './books/book-form/book-form.component'
import { BookSingleComponent } from './books/book-single/book-single.component'

import { AuthGuardService } from './services/auth-guard.service'

const routes: Routes = [
    { path: 'auth/signin', component: SigninComponent },
    { path: 'auth/signup', component: SignupComponent },
    { path: '', canActivate: [AuthGuardService], redirectTo: 'books', pathMatch: 'full' },
    { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
    { path: 'books/add', canActivate: [AuthGuardService], component: BookFormComponent },
    { path: 'books/:id', canActivate: [AuthGuardService], component: BookSingleComponent },
    { path: '**', redirectTo: 'books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
