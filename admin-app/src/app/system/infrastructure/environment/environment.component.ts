import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addEnvironment() {
    this.router.navigateByUrl("system/create-environment")
  }
}
