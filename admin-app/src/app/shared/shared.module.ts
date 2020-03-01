import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [ FormsModule, CommonModule, MatDialogModule, MatFormFieldModule, MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule, MatExpansionModule
  ],
  exports: [ FormsModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    MatExpansionModule]
})

export class SharedModule {}
