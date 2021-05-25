import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../../admin/book-add/book.model';
import { ActivatedRoute} from "@angular/router";
import { BooksService } from '../../services/books.service';
import { FormGroup} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';



@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {


  public userIsAuthenicated = false;
  private authListenerSubs!: Subscription;

  public form!: FormGroup
  book!: Book;

  constructor(public route: ActivatedRoute, private bookService: BooksService, private authService: AuthService) { }


  ngOnInit(): void {
    this.userIsAuthenicated = this.authService.getisAuth();
      this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenicated => {
        this.userIsAuthenicated = isAuthenicated;
      });

    this.route.params.subscribe((params) => {
      const id = params.bookId;
      console.log(params);
      this.bookService.getBook(id).subscribe((book) => {
        this.book = book
        console.log(book);
      })

    })
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();

  }



}
