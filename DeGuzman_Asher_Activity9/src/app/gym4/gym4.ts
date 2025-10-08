import { Component } from '@angular/core';
import { GymDataService } from '../gym-data.service';

@Component({
  selector: 'app-gym4',
  standalone: false,
  templateUrl: './gym4.html',
  styleUrl: './gym4.css'
})
export class Gym4 {
  gym: any;
  constructor(private gymData: GymDataService) {
    this.gym = this.gymData.getGymById(4);
  }
}
