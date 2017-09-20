import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { ShoppingCartService } from '../shopping-cart.service';

import { Book } from '../models/books';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  books: Book[] = [];
  filteredBooks: Book[] = [];
  category: string;
  cart: any;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private shoppingCartService: ShoppingCartService) {

    bookService.getAll().switchMap(books => {
      this.books = books;
      this.applySearchQuery();
      return activatedRoute.queryParamMap;
    })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredBooks = (this.category) ?
          this.books.filter(b => b.category === this.category) : this.books;
      });
  }

  async ngOnInit() {
  this.subscription = (await this.shoppingCartService.getCart()).subscribe(cart => this.cart = cart);
  }

  private applySearchQuery() {
    this.bookService.searchEvent.subscribe(query => this.filteredBooks = (query) ?
    this.books.filter(b => b.title.toLowerCase().includes(query)) : this.books);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
