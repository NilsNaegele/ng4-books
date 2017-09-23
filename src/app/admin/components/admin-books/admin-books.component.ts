import { Component, OnDestroy } from '@angular/core';
import { BookService } from '../../../shared/services/book.service';

import { Book } from '../../../shared/models/books';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnDestroy {
  books: Book[];
  filteredBooks: any[];
  subscription: Subscription;

  constructor(private bookService: BookService) {
    this.subscription = bookService.getAll().subscribe(books =>
          this.filteredBooks = this.books = books);
   }

   filter(query) {
     this.filteredBooks = (query) ?
              this.books.filter(b => b.title.toLowerCase().includes(query.toLowerCase())) : this.books;
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
