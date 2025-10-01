import { Component } from '@angular/core';

@Component({
  selector: 'app-gym8',
  standalone: false,
  templateUrl: './gym8.html',
  styleUrl: './gym8.css'
})
export class Gym8 {
  gymName = "Blackthorn City Gym";
  gymLeader = "Clair";
  badge = "Rising Badge";
  specialty = "Dragon Type";
  pokemons = [
    "Dragonair (Lvl. 37)",
    "Dragonair (Lvl. 37)",
    "Dragonair (Lvl. 37)",
    "Kingdra (Lvl. 40)"
  ];
}
