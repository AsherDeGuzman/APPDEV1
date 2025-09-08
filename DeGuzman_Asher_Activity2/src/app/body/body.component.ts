import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  name = "Asher Nathaniel De Guzman"
  address = "57 Holy Ghost Extension, Baguio City"
  contact = "0909049042"

  college = "University of Baguio"
  course = "Computer Science"
  highschool = "Virgen Milagrosa University Foundation"
  strand = "Accountancy, Bussiness, and Management"

  educationalAwards = [
    'Dean’s Lister, University of Baguio (2024)',
    'Chess Club President, VMUF (2023)',
    'Leadership Award, VMUF (2023)'
  ];
  educationalExperiences = [
    'Member, Computer Science Society',
    'Volunteer, UB Community Outreach',
    'Participant, Hackathon 2024'
  ];
  internships = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Software Developer Intern',
      period: 'June 2023 - August 2023',
      description: 'Worked on web application development and testing.'
    },
    {
      company: 'Placeholder Corp.',
      role: 'IT Support Intern',
      period: 'April 2022 - May 2022',
      description: 'Assisted with troubleshooting and user support.'
    }
  ];
  currentCourses = [
    { name: 'Application Development', teacher: 'Sir Jeremey Ebreo' },
    { name: 'Introduction to Information Systems and Database', teacher: 'Maam Divine Aguilar' },
    { name: 'Discrete Structures 2', teacher: 'Sir Jeremy Ebreo' }
  ];
}
