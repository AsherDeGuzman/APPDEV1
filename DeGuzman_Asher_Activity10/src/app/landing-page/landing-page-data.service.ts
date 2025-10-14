import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LandingPageDataService {
  private info = {
    title: 'Welcome to the Johto Pokémon Gyms!',
    description: 'Explore all 8 gyms, meet their leaders, and earn your badges. Click a gym in the sidebar to learn more!'
  };

  getInfo() {
    return this.info;
  }
}