import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit {

  public form!: FormGroup;

  constructor(private reviewService: ReviewService) { }


  onSaveReview() {
    if (this.form.invalid) {
      return;
    }
    this.reviewService.addReview({
      content: this.form.value.content,
      rate: this.form.value.rate

    });
    console.log(this.form.value.content, this.form.value.rate);
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      content: new FormControl(null, {validators: [Validators.required, Validators.minLength(20)]}),
      rate: new FormControl(null, {validators: [Validators.required, Validators.min(1), Validators.max(10),]})
    });
  }

}
