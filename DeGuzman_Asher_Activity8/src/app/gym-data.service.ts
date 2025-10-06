import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GymDataService {
  private gyms = [
    {
      id: 1,
      name: 'Violet Gym',
      leader: 'Falkner',
      type: 'Flying',
      badge: 'Zephyr Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/e/e0/HeartGold_SoulSilver_Falkner.png/200px-HeartGold_SoulSilver_Falkner.png',
      pokemons: [
        { name: 'Pidgey', level: 7 },
        { name: 'Pidgeotto', level: 9 }
      ]
    },
    {
      id: 2,
      name: 'Azalea Gym',
      leader: 'Bugsy',
      type: 'Bug',
      badge: 'Hive Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/6/6b/HeartGold_SoulSilver_Bugsy.png/165px-HeartGold_SoulSilver_Bugsy.png',
      pokemons: [
        { name: 'Metapod', level: 14 },
        { name: 'Kakuna', level: 14 },
        { name: 'Scyther', level: 16 }
      ]
    },
    {
      id: 3,
      name: 'Goldenrod Gym',
      leader: 'Whitney',
      type: 'Normal',
      badge: 'Plain Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/e/e1/HeartGold_SoulSilver_Whitney.png/180px-HeartGold_SoulSilver_Whitney.png',
      pokemons: [
        { name: 'Clefairy', level: 18 },
        { name: 'Miltank', level: 20 }
      ]
    },
    {
      id: 4,
      name: 'Ecruteak Gym',
      leader: 'Morty',
      type: 'Ghost',
      badge: 'Fog Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/1/1c/HeartGold_SoulSilver_Morty.png/150px-HeartGold_SoulSilver_Morty.png',
      pokemons: [
        { name: 'Gastly', level: 21 },
        { name: 'Haunter', level: 21 },
        { name: 'Haunter', level: 23 },
        { name: 'Gengar', level: 25 }
      ]
    },
    {
      id: 5,
      name: 'Cianwood Gym',
      leader: 'Chuck',
      type: 'Fighting',
      badge: 'Storm Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/b/bd/HeartGold_SoulSilver_Chuck.png/200px-HeartGold_SoulSilver_Chuck.png',
      pokemons: [
        { name: 'Primeape', level: 27 },
        { name: 'Poliwrath', level: 30 }
      ]
    },
    {
      id: 6,
      name: 'Olivine Gym',
      leader: 'Jasmine',
      type: 'Steel',
      badge: 'Mineral Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b3/HeartGold_SoulSilver_Jasmine.png/150px-HeartGold_SoulSilver_Jasmine.png',
      pokemons: [
        { name: 'Magnemite', level: 30 },
        { name: 'Magnemite', level: 30 },
        { name: 'Steelix', level: 35 }
      ]
    },
    {
      id: 7,
      name: 'Mahogany Gym',
      leader: 'Pryce',
      type: 'Ice',
      badge: 'Glacier Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/0/02/HeartGold_SoulSilver_Pryce.png/180px-HeartGold_SoulSilver_Pryce.png',
      pokemons: [
        { name: 'Seel', level: 27 },
        { name: 'Dewgong', level: 29 },
        { name: 'Piloswine', level: 31 }
      ]
    },
    {
      id: 8,
      name: 'Blackthorn Gym',
      leader: 'Clair',
      type: 'Dragon',
      badge: 'Rising Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/f/fe/HeartGold_SoulSilver_Clair.png/200px-HeartGold_SoulSilver_Clair.png',
      pokemons: [
        { name: 'Dragonair', level: 37 },
        { name: 'Dragonair', level: 37 },
        { name: 'Dragonair', level: 37 },
        { name: 'Kingdra', level: 40 }
      ]
    }
  ];

  getGyms() {
    return this.gyms;
  }
  getGymById(id: number) {
    return this.gyms.find(gym => gym.id === id);
  }
}