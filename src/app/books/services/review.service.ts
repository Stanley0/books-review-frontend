import { Injectable } from '@angular/core';
import { AppHttpClient } from 'src/app/app-common/app-http-client.service';
import { FormReview } from './review.model';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  constructor(private httpClient: AppHttpClient) {}

  public addReview(review: FormReview) {
    this.httpClient
      .post('/reviews', { content: review.content, rate: review.rate })
      .subscribe();
  }
}
