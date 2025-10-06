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
  sidebarHidden = false;

  private router = inject(Router);

  toggleSidebar() {
    this.sidebarHidden = !this.sidebarHidden;
  }

  navigateHome() {
    this.router.navigate(['/'])
  }

}

