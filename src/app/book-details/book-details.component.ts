import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/books';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  id = '';
  book: Book;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id) {
        this.bookService.get(this.id).take(1).subscribe(b => this.book = b);
      }
   }

}
