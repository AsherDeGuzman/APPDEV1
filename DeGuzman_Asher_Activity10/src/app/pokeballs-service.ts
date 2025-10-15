import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeballsService {
  getPokeballs() {
    return[
      {name: 'Poke ball', gen: 'Gen I', image: 'https://archives.bulbagarden.net/media/upload/thumb/0/00/Bag_Pok%C3%A9_Ball_SV_Sprite.png/40px-Bag_Pok%C3%A9_Ball_SV_Sprite.png'},
      {name: 'Great Ball', gen: 'Gen I', image: 'https://archives.bulbagarden.net/media/upload/thumb/5/54/Bag_Great_Ball_SV_Sprite.png/40px-Bag_Great_Ball_SV_Sprite.png'},
      {name: 'Ultra Ball', gen: 'Gen I', image: 'https://archives.bulbagarden.net/media/upload/thumb/5/55/Bag_Ultra_Ball_SV_Sprite.png/40px-Bag_Ultra_Ball_SV_Sprite.png'},
      {name: 'Master Ball', gen: 'Gen I', image: 'https://archives.bulbagarden.net/media/upload/thumb/a/a6/Bag_Master_Ball_SV_Sprite.png/40px-Bag_Master_Ball_SV_Sprite.png'},
      {name: 'Safari Ball', gen: 'Gen I', image: 'https://archives.bulbagarden.net/media/upload/thumb/8/8d/Bag_Safari_Ball_SV_Sprite.png/40px-Bag_Safari_Ball_SV_Sprite.png'},
      {name: 'Fast Ball', gen: 'Gen II', image: 'https://archives.bulbagarden.net/media/upload/thumb/3/3c/Bag_Fast_Ball_SV_Sprite.png/40px-Bag_Fast_Ball_SV_Sprite.png'},
      {name: 'Level Ball', gen: 'Gen II', image: 'https://archives.bulbagarden.net/media/upload/thumb/f/f1/Bag_Level_Ball_SV_Sprite.png/40px-Bag_Level_Ball_SV_Sprite.png'},
      {name: 'Heavy Ball', gen: 'Gen II', image: 'https://archives.bulbagarden.net/media/upload/thumb/4/46/Bag_Heavy_Ball_SV_Sprite.png/40px-Bag_Heavy_Ball_SV_Sprite.png'},
      {name: 'Love Ball', gen: 'Gen II', image: 'https://archives.bulbagarden.net/media/upload/thumb/4/40/Bag_Love_Ball_SV_Sprite.png/40px-Bag_Love_Ball_SV_Sprite.png'},
      {name: 'Friend Ball', gen: 'Gen II', image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4c/Bag_Friend_Ball_SV_Sprite.png/40px-Bag_Friend_Ball_SV_Sprite.png'},
      {name: 'Moon Ball', gen: 'Gen II', image: 'https://archives.bulbagarden.net/media/upload/thumb/2/26/Bag_Moon_Ball_SV_Sprite.png/40px-Bag_Moon_Ball_SV_Sprite.png'}
    ]
  }
}
