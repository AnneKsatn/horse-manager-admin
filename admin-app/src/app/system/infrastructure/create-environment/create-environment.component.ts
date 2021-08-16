import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-environment',
  templateUrl: './create-environment.component.html',
  styleUrls: ['./create-environment.component.scss']
})
export class CreateEnvironmentComponent implements OnInit {

  manegeForm: FormGroup;
  manegeTypes = [];
  material = [];
  cover = [];
  ground = [];
  tasks = [];

  constructor() { }

  ngOnInit(): void {
    this.manegeForm = new FormGroup({
      type: new FormControl(''),
      material: new FormControl(''),
      cover: new FormControl(''),
      ground: new FormControl(''),
      ground2: new FormControl(''),
      ground3: new FormControl(''),
      ground4: new FormControl(''),
      ground5: new FormControl(''),
    })

    this.manegeTypes = [
      { title: "поля", id: "1" }, 
      { title: "лес", id: "1" },
      { title: "озеро", id: "2"},
      { title: "залив", id: "3"},
      { title: "достопримечательность", id: "3"}
    ]

    this.material = [
      {title: "деревянная", id: "1"},
      {title: "каменная", id: "2"},
      {title: "бетонная", id: "3"},
    ]

    this.cover = [
      {title: "полностью крытый", id: "1"},
      {title: "с навесом", id: "1"},
      {title: "открытый", id: "2"},
    ]

    this.ground  = [
      {title: "еврогрунт", id: "2"}
    ]
    this.tasks = [
      {title: "отсутстуют", id: "1"},
      {title: "присутствуют", id: "2"}
    ]


  }

  onBasicUpload(event) {

  }

}
