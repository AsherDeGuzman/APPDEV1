import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BerriesService {
  getBerries() {
    return[
      {name: 'Cheri Berry', effect: 'Cures paralysis.', image: 'https://archives.bulbagarden.net/media/upload/6/61/Bag_Cheri_Berry_Sprite.png'},
      {name: 'Chesto Berry', effect: 'Cures sleep.	', image: 'https://archives.bulbagarden.net/media/upload/3/3f/Bag_Chesto_Berry_Sprite.png'},
      {name: 'Pecha Berry', effect: 'Cures poison.	', image: 'https://archives.bulbagarden.net/media/upload/8/8f/Bag_Pecha_Berry_Sprite.png'},
      {name: 'Rawst Berry', effect: 'Cures burn.	', image: 'https://archives.bulbagarden.net/media/upload/e/e5/Bag_Rawst_Berry_Sprite.png'},
      {name: 'Aspear Berry', effect: 'Cures freeze.	', image: 'https://archives.bulbagarden.net/media/upload/1/18/Bag_Aspear_Berry_Sprite.png'},
      {name: 'Leppa Berry', effect: 'Restores 10 PP.	', image: 'https://archives.bulbagarden.net/media/upload/c/cd/Bag_Leppa_Berry_Sprite.png'},
      {name: 'Oran Berry', effect: 'Restores 10 HP.	', image: 'https://archives.bulbagarden.net/media/upload/8/86/Bag_Oran_Berry_Sprite.png'},
      {name: 'Persim Berry', effect: 'Cures confusion.	', image: 'https://archives.bulbagarden.net/media/upload/0/0b/Bag_Persim_Berry_Sprite.png'},
      {name: 'Lum Berry', effect: 'Cures any non-volatile status condition and confusion.	', image: 'https://archives.bulbagarden.net/media/upload/a/a6/Bag_Lum_Berry_Sprite.png'},
      {name: 'Sitrus Berry', effect: 'Restores 25% HP when HP falls below 50%.	', image: 'https://archives.bulbagarden.net/media/upload/3/39/Bag_Sitrus_Berry_Sprite.png'}
    ]
  }
}
