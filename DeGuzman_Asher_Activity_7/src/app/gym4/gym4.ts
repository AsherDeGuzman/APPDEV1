import { Component } from '@angular/core';

@Component({
  selector: 'app-gym4',
  standalone: false,
  templateUrl: './gym4.html',
  styleUrl: './gym4.css'
})
export class Gym4 {
  gymName = "Ecruteak City Gym";
  gymLeader = "Morty";
  badge = "Fog Badge";
  specialty = "Ghost Type";
  pokemons = [
    "Gastly (Lvl. 21)",
    "Haunter (Lvl. 21)",
    "Gengar (Lvl. 25)",
    "Haunter (Lvl. 23)"
  ];
}
