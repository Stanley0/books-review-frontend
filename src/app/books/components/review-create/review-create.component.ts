import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit {

  public form!: FormGroup;
  public bookId!: string;

  constructor(private reviewService: ReviewService, public route: ActivatedRoute) { }


  onSaveReview() {
    if (this.form.invalid) {
      return;
    }
    this.reviewService.addReview( {
      content: this.form.value.content,
      rate: this.form.value.rate
    }, this.bookId);
    console.log(this.form.value.content, this.form.value.rate);
    this.form.reset();
  }

  getBookId() {
    return this.bookId;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      content: new FormControl(null, {validators: [Validators.required, Validators.minLength(20)]}),
      rate: new FormControl(null, {validators: [Validators.required, Validators.min(1), Validators.max(10),]})
    });

    this.route.params.subscribe((params) => {
      this.bookId = params.bookId
    })

  }




  }
