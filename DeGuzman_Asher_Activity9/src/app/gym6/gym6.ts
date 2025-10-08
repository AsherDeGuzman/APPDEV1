import { Component } from '@angular/core';
import { GymDataService } from '../gym-data.service';

@Component({
  selector: 'app-gym6',
  standalone: false,
  templateUrl: './gym6.html',
  styleUrl: './gym6.css'
})
export class Gym6 {
  gymName = "Olivine City Gym";
  gymLeader = "Jasmine";
  badge = "Mineral Badge";
  specialty = "Steel Type";
  pokemons = [
    "Magnemite (Lvl. 30)",
    "Magnemite (Lvl. 30)",
    "Steelix (Lvl. 35)"
  ];

  gym: any;
  constructor(private gymData: GymDataService) {
    this.gym = this.gymData.getGymById(6);
  }
}
