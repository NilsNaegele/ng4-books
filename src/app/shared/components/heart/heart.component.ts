import { Component } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent {
    isFull = true;

    toggle() {
      this.isFull = !this.isFull;
    }

}
