import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
type Trainer = {
  name: string;
  age: string;
  address: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
  pokemon4: string;
  pokemon5: string;
  pokemon6: string;
};
@Component({
  selector: 'app-trainer-form',
  imports: [ReactiveFormsModule],
  templateUrl: './trainer-form.html',
  styleUrls: ['./trainer-form.css']
})

export class TrainerForm {
  trainerList: Trainer[] = [];
  formGroup = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    age: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
    pokemon1: new FormControl('', { nonNullable: true }),
    pokemon2: new FormControl('', { nonNullable: true }),
    pokemon3: new FormControl('', { nonNullable: true }),
    pokemon4: new FormControl('', { nonNullable: true }),
    pokemon5: new FormControl('', { nonNullable: true }),
    pokemon6: new FormControl('', { nonNullable: true })
  });
  onSubmit(){
    const trainer = this.formGroup.getRawValue();
    this.trainerList.push(trainer as Trainer);
    this.formGroup.reset();
  }
}