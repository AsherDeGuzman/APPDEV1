import { Component } from '@angular/core';
import { GymDataService } from '../gym-data.service';

@Component({
  selector: 'app-gym5',
  standalone: false,
  templateUrl: './gym5.html',
  styleUrl: './gym5.css'
})
export class Gym5 {
  gym: any;
  constructor(private gymData: GymDataService) {
    this.gym = this.gymData.getGymById(5);
  }
}
