import { Component } from '@angular/core';
import { PokeballsService } from '../pokeballs-service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pokeballs',
  imports: [MatTableModule],
  templateUrl: './pokeballs.html',
  styleUrl: './pokeballs.css'
})
export class Pokeballs {
  dataSource: {name: string; gen: string}[] = [];
  //Inject the service in to the component for fruits
  constructor(private p: PokeballsService){
  }
  //on the initialization of the component
  //load the datas
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.dataSource = this.p.getPokeballs();
  }
  displayedColumns: string[] = ['name', 'color']
}
