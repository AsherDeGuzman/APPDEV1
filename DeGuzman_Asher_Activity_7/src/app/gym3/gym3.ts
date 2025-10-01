import { Component } from '@angular/core';

@Component({
  selector: 'app-gym3',
  standalone: false,
  templateUrl: './gym3.html',
  styleUrl: './gym3.css'
})
export class Gym3 {
  gymName = "Goldenrod City Gym";
  gymLeader = "Whitney";
  badge = "Plain Badge";
  specialty = "Normal Type";
  pokemons = [
    "Clefairy (Lvl. 18)",
    "Miltank (Lvl. 20)"
  ];
}
