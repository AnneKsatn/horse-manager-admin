import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { unescapeIdentifier } from '@angular/compiler';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-animal-unit',
  templateUrl: './animal-unit.component.html',
  styleUrls: ['./animal-unit.component.scss']
})
export class AnimalUnitComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit(): void {
  }


  mclick(){
    console.log("awdwa");
    this.router.navigate(['/system']);
  }
}
