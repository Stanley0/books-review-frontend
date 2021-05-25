import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BookDetailsComponent } from './views/book-details/book-details.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "bookdetails/:bookId",
    component: BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
