import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllBooksComponent} from "./components/all-books/all-books.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {AllBooksPageComponent} from "./components/all-books-page/all-books-page.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import {AuthGuard} from "./services/auth.guard";
import {EditBookComponent} from "./components/edit-book/edit-book.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'books',
    component: AllBooksPageComponent,

  },
  {
    path: 'book/detail/:id',
    component: BookDetailsComponent
  },
  {
    path: 'book/edit/:id',
    component: EditBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
,
  {
    path: 'add-book',
    component: AddBookComponent,
    canActivate: [AuthGuard]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
