import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'    
import { AppRoutingModule } from './app-routing.module'    
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { SigninComponent } from './auth/signin/signin.component'
import { SignupComponent } from './auth/signup/signup.component'
import { BookListComponent } from './books/book-list/book-list.component'
import { BookFormComponent } from './books/book-form/book-form.component'
import { BookSingleComponent } from './books/book-single/book-single.component'
import { HeaderComponent } from './header/header.component'

import { AuthService } from './services/auth.service'
import { AuthGuardService } from './services/auth-guard.service'
import { BooksService } from './services/books.service'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    BookListComponent,
    BookFormComponent,
    BookSingleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [AuthService, AuthGuardService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
