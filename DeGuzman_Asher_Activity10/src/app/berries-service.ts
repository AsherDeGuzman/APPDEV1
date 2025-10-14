import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BerriesService {
  getBerries() {
    return[
      {name: 'Cheri Berry', effect: 'Cures paralysis.'},
      {name: 'Chesto Berry', effect: 'Cures sleep.	'},
      {name: 'Pecha Berry', effect: 'Cures poison.	'},
      {name: 'Rawst Berry', effect: 'Cures burn.	'},
      {name: 'Aspear Berry', effect: 'Cures freeze.	'},
      {name: 'Leppa Berry', effect: 'Restores 10 PP.	'},
      {name: 'Oran Berry', effect: 'Restores 10 HP.	'},
      {name: 'Persim Berry', effect: 'Cures confusion.	'},
      {name: 'Lum Berry', effect: 'Cures any non-volatile status condition and confusion.	'},
      {name: 'Sitrus Berry', effect: 'Restores 25% HP when HP falls below 50%.	'}
    ]
  }
}
