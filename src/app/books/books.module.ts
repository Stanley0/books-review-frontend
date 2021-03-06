import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './views/home/home.component';
import { BookDetailsComponent } from './views/book-details/book-details.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksFilteringComponent } from './components/books-filtering/books-filtering.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { ReviewCreateComponent } from './components/review-create/review-create.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    BookDetailsComponent,
    BookCardComponent,
    BooksListComponent,
    BooksFilteringComponent,
    BooksSearchComponent,
    ReviewCreateComponent,
    ReviewsListComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AppCommonModule
  ]
})
export class BooksModule { }
