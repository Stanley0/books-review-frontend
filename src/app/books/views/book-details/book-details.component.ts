import { Component, OnInit } from '@angular/core';
import { Book } from '../../../admin/book-add/book.model';
import { ActivatedRoute} from "@angular/router";
import { BooksService } from '../../services/books.service';
import { FormGroup} from '@angular/forms';



@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  public form!: FormGroup
  book?: Book;

  constructor(public route: ActivatedRoute, private bookService: BooksService) { }


  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const id = params.bookid;
      console.log(params);
      this.bookService.getBook(id).subscribe((book) => {
        this.book = book
      })

    })


  }


}
