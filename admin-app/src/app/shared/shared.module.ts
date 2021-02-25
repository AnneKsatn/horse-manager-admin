import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {TableModule} from 'primeng/table';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  imports: [ FormsModule, CommonModule, MatDialogModule, MatFormFieldModule, MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatExpansionModule, 
    MatListModule, 
    MatIconModule, 
    MatCheckboxModule,
    MatCardModule,
    PanelModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    MenuModule,
    MessagesModule,
    InputTextModule
  ],
  exports: [ FormsModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule, 
    MatListModule, 
    MatIconModule, 
    MatCheckboxModule, 
    MatDatepickerModule,
    MatCardModule,
    PanelModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    MenuModule,
    MessagesModule,
    InputTextModule
  ]
})

export class SharedModule {}
