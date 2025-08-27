import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  //Array of Colors
  colors: string[] = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];
  currentColorIndex: number = 0;
  changeNameColor() {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
  }

  get currentColor(): string {
  return this.colors[this.currentColorIndex];
}
  profile = { 
    name: 'Asher De Guzman',
    title: 'Developer',
    about: 'Hire me, I am a passionate developer with experience in building web applications using modern technologies.',
    skills: ['HTML/CSS' , 'JavaScript', 'Angular', 'TypeScript'], 
    experience: [
      {
        role: 'Frontend Developer', 
        company: 'Tech Solutions', 
        period: 'Jan 2024 - Present',
        description: 'Developed and maintained web applications using Angular and other frontend technologies.'
      },

      {
        role: 'Frontend Intern', 
        company: 'Digital Creation', 
        period: 'Jan 2022 - 2024',
        description: 'Assisted in the development of web applications and gained hands-on experience with Angular and TypeScript.'
      },
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Baguio',
      year: '2024 - 2028'
    },

    contact: {
      email: '20244549@s.ubaguio.edu',
      phone: '+639123456789',
      location: 'Baguio City, Philippines'
    }
  }
}
