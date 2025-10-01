import { Component } from '@angular/core';

@Component({
  selector: 'app-gym7',
  standalone: false,
  templateUrl: './gym7.html',
  styleUrl: './gym7.css'
})
export class Gym7 {
  gymName = "Mahogany Town Gym";
  gymLeader = "Pryce";
  badge = "Glacier Badge";
  specialty = "Ice Type";
  pokemons = [
    "Seel (Lvl. 27)",
    "Dewgong (Lvl. 29)",
    "Piloswine (Lvl. 31)"
  ];
}
