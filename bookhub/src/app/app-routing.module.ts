import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllBooksComponent} from "./components/all-books/all-books.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {AllBooksPageComponent} from "./components/all-books-page/all-books-page.component";

const routes: Routes = [
  {
    path: '',
    component: AllBooksPageComponent,

  },
  {
    path: 'book/detail/:id',
    component: BookDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
