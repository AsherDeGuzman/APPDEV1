import { Component } from '@angular/core';
import { LandingPageDataService } from './landing-page-data.service';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  info: any;
  constructor(private landingPageData: LandingPageDataService) {
    this.info = this.landingPageData.getInfo();
  }
}
