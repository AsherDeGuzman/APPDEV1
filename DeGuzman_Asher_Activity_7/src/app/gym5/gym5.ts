import { Component } from '@angular/core';

@Component({
  selector: 'app-gym5',
  standalone: false,
  templateUrl: './gym5.html',
  styleUrl: './gym5.css'
})
export class Gym5 {
  gymName = "Cianwood City Gym";
  gymLeader = "Chuck";
  badge = "Storm Badge";
  specialty = "Fighting Type";
  pokemons = [
    "Primeape (Lvl. 27)",
    "Poliwrath (Lvl. 30)"
  ];
}
