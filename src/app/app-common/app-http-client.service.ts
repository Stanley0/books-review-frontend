import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppHttpClient {
  private readonly serverUrl = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string, options?: Parameters<HttpClient["get"]>[1]) {
    return this.httpClient.get<T>(`${this.serverUrl}` + url, options);
  }

  public post(url: string, body: any) {
    return this.httpClient.post(`${this.serverUrl}` + url, body);
  }
}
