import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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

  selectedCities: string[] = [];

  selectedCategories: any[] = ['Technology', 'Sports'];
  stableTypesP = [];

  categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

  checked: boolean = false;

  stableTypes: City[];
  material: City[];
  myForm: FormGroup;

  stableForm: FormGroup;

  products = [];

  selectedCityCode: string;
  val: number;

  dataarray=[];
  stall = {};
  customers = []


  rowGroupMetadata: any = {};


  constructor(private formBuilder: FormBuilder) {
      this.stableTypes = [
          {title: 'стационарная', id: '1'},
          {title: 'летняя', id: '2'},
      ];

      this.material = [
        {title: "деревянная", id: "1"},
        {title: "каменная", id: "2"},
        {title: "бетонная", id: "3"},
      ]

      this.stableTypesP = [
        {title: "только частные лошади", id: "1"},
        {title: "только прокатные лошади", id: "2"},
        {title: "частные и прокатные лошади", id: "3"},
      ]
  }

  ngOnInit(): void {
    this.selectedCategories = this.categories.slice(1,3);

    this.stableForm = new FormGroup({
      type: new FormControl(null),
      material: new FormControl(null),
      descriptopn: new FormControl(null),
      stalls: new FormArray([this.initStallRows()]),
      autodrinker: new FormControl(null),
      slowfeeder: new FormControl(null),
      winterwash: new FormControl(null),
      solarium: new FormControl(null),
      placeforclearning1: new FormControl(null),
      placeforclearning2: new FormControl(null)
    })


    this.customers = [
      { title: "Автопоилки", groupTitle: "Оснащение конюшни", formControlName: "autodrinker" },
      { title: "Медленные кормушки", groupTitle: "Оснащение конюшни", formControlName: "slowfeeder" },
      { title: "Конная мойка в здании конюшни", groupTitle: "Оснащение конюшни", formControlName: "winterwash" },
      { title: "Солярий", groupTitle: "Оснащение конюшни", formControlName: "solarium" },
      { title: "Развязки в коридоре", groupTitle: "Оснащение конюшни", formControlName: "placeforclearning1" },
      { title: "Место для сбора лошади", groupTitle: "Оснащение конюшни", formControlName: "placeforclearning2" },


      { title: "Переодевалка", groupTitle: "Инфраструктура для всадников", formControlName: "autodrinker" },
      { title: "Шкафчики для хранения вещей всадников", groupTitle: "Инфраструктура для всадников", formControlName: "slowfeeder" },
      { title: "Шкафичики для хранения амуниции", groupTitle: "Инфраструктура для всадников", formControlName: "winterwash" },
      { title: "Амуничник", groupTitle: "Инфраструктура для всадников", formControlName: "solarium" },
      { title: "Теплый туалет", groupTitle: "Инфраструктура для всадников", formControlName: "placeforclearning1" },
      { title: "Душ", groupTitle: "Инфраструктура для всадников", formControlName: "placeforclearning2" },
      { title: "Гостевая комната", groupTitle: "Инфраструктура для всадников", formControlName: "placeforclearning2" },
    ]

    this.rowGroupMetadata["Оснащение конюшни"] = {index: 0, size: 6}
    this.rowGroupMetadata["Инфраструктура для всадников"] = {index: 6, size: 9}
  
  
  
  }

  get stalls() {
    return this.stableForm.get('stalls') as FormArray;
  }

  initStallRows() {
    return this.formBuilder.group({
      length: new FormControl(null),
      width: new FormControl(null),
      amount: new FormControl(null)
    })
  }

  addStallType() {
    this.stalls.push(this.initStallRows());
  }

  deleteStallType(index: number) {
    this.stalls.removeAt(index)
  }

  sibmit() {
    console.log(this.stalls.value)
  }


  uploadedFiles: any[] = [];


  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onBasicUpload($event) {
    
  }
}
