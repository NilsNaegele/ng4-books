import { Component, Input } from '@angular/core';
import { CategoryService } from '../../../../shared/services/category.service';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent {
  @Input() category;
  categories$;

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
   }

}
