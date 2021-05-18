import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppHttpClient } from 'src/app/app-common/app-http-client.service';
import { Book, FormBook } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookAddService {


  private books: Book[] = [];



  constructor(private httpClient: AppHttpClient) {}

  public addBook(book: FormBook) {
    const bookData = new FormData();
    bookData.append("title", book.title);
    bookData.append("description", book.description);
    bookData.append("image", book.image, "image");
    bookData.append("author", book.author);
    bookData.append("category", JSON.stringify(book.category));
    this.httpClient.post('/books', bookData)
      .subscribe();
  }
}
