import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-month',
  templateUrl: './current-month.component.html',
  styleUrls: ['./current-month.component.scss']
})
export class CurrentMonthComponent implements OnInit {

  services = [{
    "client": "Касаткина А.С",
    "phone": "+79215673714",
    "services": [{
      "title": "Постой лошади 'Эстетика'",
      "price": "25 000"
    }, {
      "title": "Личный шкафчик",
      "price": "1 000"
    }, {
      "title": "Конный солярий",
      "price": "4 000"
    }]
  },
  {
    "client": "Островская А.А.",
    "phone": "+79211234743",
    "services": [{
      "title": "Постой лошади 'Агат'",
      "price": "25 000"
    }, {
      "title": "Одевание попоны",
      "price": "1 000"
    }, {
      "title": "Дополнительное сено",
      "price": "4 000"
    }]
  }
  ]

  checked = false;
  constructor() { }

  ngOnInit(): void {
  }

}
