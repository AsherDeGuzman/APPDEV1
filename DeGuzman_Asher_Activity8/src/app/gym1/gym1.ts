import { Component } from '@angular/core';
import { GymDataService } from '../gym-data.service';

@Component({
  selector: 'app-gym1',
  standalone: false,
  templateUrl: './gym1.html',
  styleUrl: './gym1.css'
})
export class Gym1 {
  gym: any;
  constructor(private gymData: GymDataService) {
    this.gym = this.gymData.getGymById(1);
  }
}
