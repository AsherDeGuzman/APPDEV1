import { Component } from '@angular/core';

@Component({
  selector: 'app-gym2',
  standalone: false,
  templateUrl: './gym2.html',
  styleUrl: './gym2.css'
})
export class Gym2 {
  gymName = "Azalea Town Gym";
  gymLeader = "Bugsy";
  badge = "Hive Badge";
  specialty = "Bug Type";
  pokemons = [
    "Metapod (Lvl. 14)",
    "Kakuna (Lvl. 14)",
    "Scyther (Lvl. 16)"
  ];
}
