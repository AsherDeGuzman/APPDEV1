import { Component } from '@angular/core';
import { GymDataService } from '../gym-data.service';

@Component({
  selector: 'app-gym3',
  standalone: false,
  templateUrl: './gym3.html',
  styleUrl: './gym3.css'
})
export class Gym3 {
  gym: any;
  constructor(private gymData: GymDataService) {
    this.gym = this.gymData.getGymById(3);
  }
}
