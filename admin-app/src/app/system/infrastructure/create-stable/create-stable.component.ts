import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


interface City {
  title: string,
  id: string
}

@Component({
  selector: 'app-create-stable',
  templateUrl: './create-stable.component.html',
  styleUrls: ['./create-stable.component.scss']
})
export class CreateStableComponent implements OnInit {

  cities: City[];
  material: City[];
  myForm: FormGroup;

  stableForm: FormGroup;

  selectedCityCode: string;
  val: number;

  constructor() {
      this.cities = [
          {title: 'Стационарная', id: '1'},
          {title: 'Летняя', id: '2'},
      ];

      this.material = [
        {title: "деревянная", id: "1"},
        {title: "каменная", id: "2"},
        {title: "бетонная", id: "2"},
      ]
  }

  ngOnInit(): void {
  }
}
