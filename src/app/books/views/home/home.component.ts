import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService, SortValues } from '../../services/books.service';
import { Book } from '../../../admin/book-add/book.model'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private sortByValue: SortValues = "Featured";
  private activeCategories: string[] = [];

  public books: Book[] = [];
  private booksSub?: Subscription;

  constructor(private booksService: BooksService) { }

  public ngOnInit(): void {
    this.booksSub = this.booksService.getBooksUpdateListener()
      .subscribe((books) => {
        this.books = books
        console.log(books);
      });
    this.booksService.getBooks(this.activeCategories, this.sortByValue, "");


  }

  public onCategoryChanged(categoriesSelected: string[]) {
    this.activeCategories = categoriesSelected;
    this.filterBooks();
  }

  public onSortByChanged(sortByValue: SortValues) {
    this.sortByValue = sortByValue;
    this.filterBooks();
  }

  private filterBooks() {
    this.booksService.getBooks(this.activeCategories, this.sortByValue, "");
  }


}
