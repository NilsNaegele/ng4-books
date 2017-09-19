import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { CategoryService } from '../category.service';

import { Book } from '../models/books';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  categories$;
  category: string;

  constructor(private bookService: BookService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute) {

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
    this.categories$ = categoryService.getAll();
  }

  private applySearchQuery() {
    this.bookService.searchEvent.subscribe(query => this.filteredBooks = (query) ?
    this.books.filter(b => b.title.toLowerCase().includes(query)) : this.books);
  }


}
