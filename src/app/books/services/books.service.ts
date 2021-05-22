import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Book } from 'src/app/admin/book-add/book.model';
import { AppHttpClient } from 'src/app/app-common/app-http-client.service';
import { categories } from '../../admin/book-add/category.model';

export type SortValues = 'Featured' | 'Rate high to low' | 'Rate low to high';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private booksUpdated = new BehaviorSubject<Book[]>([]);


  constructor(private httpClient: AppHttpClient) {}

  public getCategories() {
    return categories;
  }

  public getBooks(
    categories: string[],
    sortBy: SortValues,
    searchText?: string
  ) {
    let params = new HttpParams();
    console.log(categories.length);
    if (categories.length) {
      params = params.append("category", categories.join(","));
    }
    this.httpClient.get<Book[]>('/books', {params: params}).subscribe((books) => {
      return this.booksUpdated.next(books);
    });
  }

  getBooksUpdateListener() {
    return this.booksUpdated.asObservable();
  }

  getBook(id: string) {
    return this.httpClient.get<Book>('/books/' + id);



  }






}



