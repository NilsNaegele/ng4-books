import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class BookService {
  searchEvent: EventEmitter<string> = new EventEmitter();

  constructor(private db: AngularFireDatabase) { }

  create(book) {
    return this.db.list('/books').push(book);
  }

  getAll() {
    return this.db.list('/books');
  }

  get(bookId) {
    return this.db.object('/books/' + bookId);
  }

  update(bookId, book) {
    return this.db.object('/books/' + bookId).update(book);
  }

  delete(bookId) {
    return this.db.object('/books/' + bookId).remove();
  }

}
