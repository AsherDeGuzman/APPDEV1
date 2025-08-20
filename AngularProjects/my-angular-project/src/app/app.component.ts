import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [
    CommonModule, 
    HeroesComponent
  ]
})
export class AppComponent {
  title = 'my-angular-project';
  myName = 'Asher'
}
