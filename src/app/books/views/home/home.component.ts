import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Book, BooksService, SortValues } from '../../services/books.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private sortByValue: SortValues = "Featured";
  private activeCategories: string[] = [];

  public books!: Book[];

  constructor(private booksService: BooksService) { }

  public ngOnInit(): void {
    this.books = this.booksService.getBooks(this.activeCategories, this.sortByValue, "");
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
    this.books = this.booksService.getBooks(this.activeCategories, this.sortByValue, "");
  }
}
