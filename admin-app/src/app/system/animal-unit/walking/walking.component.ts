import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walking',
  templateUrl: './walking.component.html',
  styleUrls: ['./walking.component.scss']
})
export class WalkingComponent implements OnInit {

  levadas = [{
    "title": "Южная левада",
    "interval": [
      {
        "time": "7:00 - 13:00",
        "horses": "Эстетика, Роланд, Вьенто"
      },
      {
        "time": "13:00 - 20:00",
        "horses": "Византия, Македония, Гран-дрю"
      },
    ]
  },
  {
    "title": "Левада №2",
    "interval": [
      {
        "time": "10:00 - 13:00",
        "horses": "Арго"
      },
      {
        "time": "13:00 - 17:00",
        "horses": "Мадлен"
      },
      {
        "time": "17:00 - 20:00",
        "horses": "Пифагор"
      }
    ]
  },
  {
    "title": "Левада №3",
    "interval": [
      {
        "time": "10:00 - 15:00",
        "horses": "Бродобрей, Мифология"
      },
      {
        "time": "15:00 - 18:00",
        "horses": "Бродобрей, Мифология"
      }
    ]
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
