import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { inject } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {

  private router = inject(Router);

  navigateHome() {
    this.router.navigate(['/'])
  }

}

