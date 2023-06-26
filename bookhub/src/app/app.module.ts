import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookCoverComponent } from './components/book-cover/book-cover.component';
import { BookTitleComponent } from './components/book-title/book-title.component';
import { BookAuthorComponent } from './components/book-author/book-author.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarTitleComponent } from './shared/search-bar-title/search-bar-title.component';
import {FormsModule} from "@angular/forms";
import { AllBooksPageComponent } from './components/all-books-page/all-books-page.component';
import { FilterTitlePipe } from './pipes/filter-title.pipe';
import { FilterAuthorPipe } from './pipes/filter-author.pipe';
import { SearchBarAuthorComponent } from './shared/search-bar-author/search-bar-author.component';
import { TextToLowerCaseDirective } from './directives/text-to-lower-case.directive';
import { HomeComponent } from './components/home/home.component';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookGenresComponent } from './components/book-genres/book-genres.component';
import { BookCoverBigComponent } from './components/book-cover-big/book-cover-big.component';
import { BookGenresBigComponent } from './components/book-genres-big/book-genres-big.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    BookItemComponent,
    BookCoverComponent,
    BookTitleComponent,
    BookAuthorComponent,
    BookDetailsComponent,
    BookDescriptionComponent,
    SummaryPipe,
    SearchBarTitleComponent,
    AllBooksPageComponent,
    FilterTitlePipe,
    FilterAuthorPipe,
    SearchBarAuthorComponent,
    TextToLowerCaseDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddBookComponent,
    BookGenresComponent,
    BookCoverBigComponent,
    BookGenresBigComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, AuthService,    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
