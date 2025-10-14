import { Component } from '@angular/core';
import { BerriesService } from '../berries-service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-berries',
  imports: [MatTableModule],
  templateUrl: './berries.html',
  styleUrl: './berries.css'
})
export class Berries {
  dataSource: {name: string; effect: string}[] = [];
  //Inject the service in to the component for fruits
  constructor(private b: BerriesService){
  }
  //on the initialization of the component
  //load the datas
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.dataSource = this.b.getBerries();
  }
  displayedColumns: string[] = ['name', 'effect']
}
