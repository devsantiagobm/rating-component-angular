
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ratings = [1, 2, 3, 4, 5];
  selected: number | null = null;
  canShowResult = false;

  setSelected(rating: number) {
    this.selected = rating;
  }

  showResult() {
    if (this.selected) this.canShowResult = true;
  }
  
}
