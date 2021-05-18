import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {


  public form: FormGroup;


  constructor() { }

  public categories = [
    "Biographies",
    "History",
    "Fiction",
    "Sci-Fi",
    "Fantasy",
    "Science",
    "Detective",
    "Horror",
    "Classic",
    "Crime",
    "Drama",
    "Poetry",
    "Romance",
    "Western"
    ]

  ngOnInit(): void {
  }

}
