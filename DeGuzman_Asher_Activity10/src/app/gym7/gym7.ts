import { Component } from '@angular/core';
import { GymDataService } from '../gym-data.service';

@Component({
  selector: 'app-gym7',
  standalone: false,
  templateUrl: './gym7.html',
  styleUrl: './gym7.css'
})
export class Gym7 {
  gym: any;
  constructor(private gymData: GymDataService) {
    this.gym = this.gymData.getGymById(7);
  }
}
