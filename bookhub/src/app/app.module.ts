import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookCoverComponent } from './components/book-cover/book-cover.component';
import { BookTitleComponent } from './components/book-title/book-title.component';
import { BookAuthorComponent } from './components/book-author/book-author.component';
import {HttpClientModule} from "@angular/common/http";
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
