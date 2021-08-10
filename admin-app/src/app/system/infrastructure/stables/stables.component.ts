import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stables',
  templateUrl: './stables.component.html',
  styleUrls: ['./stables.component.scss']
})
export class StablesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addStabe() {
    this.router.navigateByUrl('system/create-stable')
  }

}
