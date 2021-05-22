import { Injectable } from "@angular/core";
import { AppHttpClient } from "src/app/app-common/app-http-client.service";
import { FormReview } from "./review.model";





@Injectable({ providedIn: "root" })
export class ReviewService {



constructor(private httpClient: AppHttpClient) {}





public addReview(review: FormReview) {
  const reviewData = new FormData();
  reviewData.append("content", review.content);
  reviewData.append("rate", review.rate);
  this.httpClient.post('/reviews', reviewData)
    .subscribe();

}



}
