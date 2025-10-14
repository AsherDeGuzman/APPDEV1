import { Component } from '@angular/core';
import { GymDataService } from '../gym-data.service';

@Component({
  selector: 'app-gym8',
  standalone: false,
  templateUrl: './gym8.html',
  styleUrl: './gym8.css'
})
export class Gym8 {
  gym: any;
  constructor(private gymData: GymDataService) {
    this.gym = this.gymData.getGymById(8);
  }
}
