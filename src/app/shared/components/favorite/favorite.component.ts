import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
    isFavorite = true;
    isFavorite1 = false;
    isFavorite2 = false;
    isFavorite3 = false;
    isFavorite4 = false;

    toggle(value: number) {
      if (value === 0) {
      this.isFavorite = !this.isFavorite;
      }
      if (value === 1) {
      this.isFavorite1 = !this.isFavorite1;
      }
      if (value === 2) {
      this.isFavorite2 = !this.isFavorite2;
      }
      if (value === 3) {
      this.isFavorite3 = !this.isFavorite3;
      }
      if (value === 4) {
      this.isFavorite4 = !this.isFavorite4;
      }

    }

}
