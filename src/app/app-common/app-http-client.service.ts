import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppHttpClient {
  private readonly serverUrl = process.env.serverUrl;

  constructor(private httpClient: HttpClient) {}

  public get(url: string) {
    return this.httpClient.get(`${this.serverUrl}` + url);
  }
}
