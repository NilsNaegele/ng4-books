import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

import { Book } from '../../../shared/models/books';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateBooks();
  }

  private populateBooks() {
    this.bookService.getAll().switchMap(books => {
      this.books = books;
      this.applySearchQuery();
      return this.activatedRoute.queryParamMap;
    })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredBooks = (this.category) ?
      this.books.filter(b => b.category === this.category) : this.books;
  }

  private applySearchQuery() {
    this.bookService.searchEvent.subscribe(query => this.filteredBooks = (query) ?
      this.books.filter(b => b.title.toLowerCase().includes(query)) : this.books);
  }

}
