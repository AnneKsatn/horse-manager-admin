import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maneges',
  templateUrl: './maneges.component.html',
  styleUrls: ['./maneges.component.scss']
})
export class ManegesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addManege(): void {
    this.router.navigateByUrl("system/create-manege")
  }
}
