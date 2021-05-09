import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BooksService, SortValues } from '../../services/books.service';

export type CategoryFilter = {
  category: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-books-filtering',
  templateUrl: './books-filtering.component.html',
  styleUrls: ['./books-filtering.component.scss']
})
export class BooksFilteringComponent implements OnInit {

  @Output() onSortByChangedEvent = new EventEmitter<SortValues>();
  @Output() onCategoryChangedEvent = new EventEmitter<string[]>();

  public selectedSort = "Featured";
  public categories?: CategoryFilter[];
  public sortOptions = [
    "Featured",
    "Rate high to low",
    "Rate low to high",
  ]

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.categories = this.bookService.getCategories().map((categoryName) => {
      return { category: categoryName, isSelected: false }
    });
  }

  public onSortChanged(event: any) {
    if (event?.value && this.onSortByChangedEvent) {
      this.onSortByChangedEvent.emit(event.value);
    }
  }

  public onCategoryChanged(event: any) {
    if (this.onCategoryChangedEvent) {
      if (!this.categories) {
        return;
      }

      this.onCategoryChangedEvent.emit(this.categories
        .filter(category => category.isSelected)
        .map(category => category.category)
      );
    }
  }
}
