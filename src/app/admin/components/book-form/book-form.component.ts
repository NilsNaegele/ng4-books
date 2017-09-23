import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../shared/services/category.service';
import { BookService } from '../../../shared/services/book.service';
import 'rxjs/add/operator/take';

export interface BookForm {
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  categories$;
  id = '';
  book: BookForm = {title: '', description: '', price: 0, category: '', imageUrl: ''};

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private bookService: BookService) {
      this.categories$ = categoryService.getAll();
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id) {
        this.bookService.get(this.id).take(1).subscribe(b => this.book = b);
      }
   }

   save(book) {
     if (this.id) {
       this.bookService.update(this.id, book);
     } else {
       this.bookService.create(book);
    }
     this.router.navigate(['/admins/books']);
   }

   delete() {
     if (!confirm('Are you sure you want to delete this book?')) { return; }
     this.bookService.delete(this.id);
     this.router.navigate(['/admins/books']);
   }

}
