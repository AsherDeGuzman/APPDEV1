import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  count: number = 0;
  
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  } 

  random() {
    if (this.count > 0) {
      this.count = Math.floor(Math.random() * -100);
    } else {
      this.count = Math.floor(Math.random() * 100);
    }
  }
}
