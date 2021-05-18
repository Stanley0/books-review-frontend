import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppHttpClient {
  private readonly serverUrl = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  public get(url: string) {
    return this.httpClient.get(`${this.serverUrl}` + url);
  }

  public post(url: string, body: any) {
    return this.httpClient.post(`${this.serverUrl}` + url, body);
  }
}
