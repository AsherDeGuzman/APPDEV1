import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeballsService {
  getPokeballs() {
    return[
      {name: 'Poke ball', gen: 'Gen I'},
      {name: 'Great Ball', gen: 'Gen I'},
      {name: 'Ultra Ball', gen: 'Gen I'},
      {name: 'Master Ball', gen: 'Gen I'},
      {name: 'Safari Ball', gen: 'Gen I'},
      {name: 'Fast Ball', gen: 'Gen II'},
      {name: 'Level Ball', gen: 'Gen II'},
      {name: 'Heavy Ball', gen: 'Gen II'},
      {name: 'Love Ball', gen: 'Gen II'},
      {name: 'Friend Ball', gen: 'Gen II'},
      {name: 'Moon Ball', gen: 'Gen II'}
    ]
  }
}
