import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GymDataService {
  private gyms = [
    {
      id: 1,
      number: 1,
      name: 'Violet Gym',
      leader: 'Falkner',
      type: 'Flying',
      badge: 'Zephyr Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/e/e0/HeartGold_SoulSilver_Falkner.png/200px-HeartGold_SoulSilver_Falkner.png',
      description: 'The first Johto gym, located in Violet City. Falkner specializes in Flying-type Pokémon and values the freedom of the skies.',
      pokemons: [
        { name: 'Pidgey', level: 7 },
        { name: 'Pidgeotto', level: 9 }
      ]
    },
    {
      id: 2,
      number: 2,
      name: 'Azalea Gym',
      leader: 'Bugsy',
      type: 'Bug',
      badge: 'Hive Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/6/6b/HeartGold_SoulSilver_Bugsy.png/165px-HeartGold_SoulSilver_Bugsy.png',
      description: 'The second Johto gym, found in Azalea Town. Bugsy is a master of Bug-type Pokémon and studies their evolution.',
      pokemons: [
        { name: 'Metapod', level: 14 },
        { name: 'Kakuna', level: 14 },
        { name: 'Scyther', level: 16 }
      ]
    },
    {
      id: 3,
      number: 3,
      name: 'Goldenrod Gym',
      leader: 'Whitney',
      type: 'Normal',
      badge: 'Plain Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/e/e1/HeartGold_SoulSilver_Whitney.png/180px-HeartGold_SoulSilver_Whitney.png',
      description: 'The third Johto gym, in the bustling Goldenrod City. Whitney is famous for her Normal-type Pokémon and her tough Miltank.',
      pokemons: [
        { name: 'Clefairy', level: 18 },
        { name: 'Miltank', level: 20 }
      ]
    },
    {
      id: 4,
      number: 4,
      name: 'Ecruteak Gym',
      leader: 'Morty',
      type: 'Ghost',
      badge: 'Fog Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/1/1c/HeartGold_SoulSilver_Morty.png/150px-HeartGold_SoulSilver_Morty.png',
      description: 'The fourth Johto gym, in Ecruteak City. Morty is a Ghost-type specialist, deeply connected to Johto’s legends and towers.',
      pokemons: [
        { name: 'Gastly', level: 21 },
        { name: 'Haunter', level: 21 },
        { name: 'Haunter', level: 23 },
        { name: 'Gengar', level: 25 }
      ]
    },
    {
      id: 5,
      number: 5,
      name: 'Cianwood Gym',
      leader: 'Chuck',
      type: 'Fighting',
      badge: 'Storm Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/b/bd/HeartGold_SoulSilver_Chuck.png/200px-HeartGold_SoulSilver_Chuck.png',
      description: 'The fifth Johto gym, located in Cianwood City. Chuck’s Fighting-type Pokémon are trained in strength and discipline.',
      pokemons: [
        { name: 'Primeape', level: 27 },
        { name: 'Poliwrath', level: 30 }
      ]
    },
    {
      id: 6,
      number: 6,
      name: 'Olivine Gym',
      leader: 'Jasmine',
      type: 'Steel',
      badge: 'Mineral Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b3/HeartGold_SoulSilver_Jasmine.png/150px-HeartGold_SoulSilver_Jasmine.png',
      description: 'The sixth Johto gym, in Olivine City. Jasmine is the first Steel-type gym leader, known for her gentle spirit and powerful Steelix.',
      pokemons: [
        { name: 'Magnemite', level: 30 },
        { name: 'Magnemite', level: 30 },
        { name: 'Steelix', level: 35 }
      ]
    },
    {
      id: 7,
      number: 7,
      name: 'Mahogany Gym',
      leader: 'Pryce',
      type: 'Ice',
      badge: 'Glacier Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/0/02/HeartGold_SoulSilver_Pryce.png/180px-HeartGold_SoulSilver_Pryce.png',
      description: 'The seventh Johto gym, in Mahogany Town. Pryce’s Ice-type Pokémon reflect his wisdom and resilience.',
      pokemons: [
        { name: 'Seel', level: 27 },
        { name: 'Dewgong', level: 29 },
        { name: 'Piloswine', level: 31 }
      ]
    },
    {
      id: 8,
      number: 8,
      name: 'Blackthorn Gym',
      leader: 'Clair',
      type: 'Dragon',
      badge: 'Rising Badge',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/f/fe/HeartGold_SoulSilver_Clair.png/200px-HeartGold_SoulSilver_Clair.png',
      description: 'The eighth and final Johto gym, in Blackthorn City. Clair’s Dragon-type Pokémon are a true test for any trainer.',
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