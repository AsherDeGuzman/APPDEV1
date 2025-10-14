import { Component } from '@angular/core';
import { GymDataService } from '../gym-data.service';

@Component({
  selector: 'app-gym2',
  standalone: false,
  templateUrl: './gym2.html',
  styleUrl: './gym2.css'
})
export class Gym2 {
  gym: any;
  constructor(private gymData: GymDataService) {
    this.gym = this.gymData.getGymById(2);
  }
}
