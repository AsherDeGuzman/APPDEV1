import { Component } from '@angular/core';

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
}
