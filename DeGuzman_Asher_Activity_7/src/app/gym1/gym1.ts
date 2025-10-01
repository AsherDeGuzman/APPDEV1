import { Component } from '@angular/core';

@Component({
  selector: 'app-gym1',
  standalone: false,
  templateUrl: './gym1.html',
  styleUrl: './gym1.css'
})
export class Gym1 {
  gymName = "Violet City Gym";
  gymLeader = "Falkner";
  badge = "Zephyr Badge";
  specialty = "Flying Type";
  pokemons = [
    "Pidgey (Lvl. 7)",
    "Pidgeotto (Lvl. 9)"
  ];
}
