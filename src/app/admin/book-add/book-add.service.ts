import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppHttpClient } from 'src/app/app-common/app-http-client.service';

@Injectable({
  providedIn: 'root',
})
export class BookAddService {
  constructor(private httpClient: AppHttpClient) {}

  public addBook(book: any) {
    this.httpClient.get('/book');
  }
}
