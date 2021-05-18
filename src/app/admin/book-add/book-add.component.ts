import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

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
