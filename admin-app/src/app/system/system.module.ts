import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { AnimalUnitComponent} from './animal-unit/animal-unit.component';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ResidentUnitComponent } from './animal-unit/resident-unit/resident-unit.component';
import { AddHorseDialogComponent } from './animal-unit/resident-unit/add-horse-dialog/add-horse-dialog.component';
import { OwnerUnitComponent } from './animal-unit/owner-unit/owner-unit.component';
import { AddOwnerDialogComponent } from './animal-unit/owner-unit/add-owner-dialog/add-owner-dialog.component';


@NgModule({
  imports: [CommonModule, SharedModule, SystemRoutingModule, MatGridListModule, MatTabsModule, MatButtonModule, MatFormFieldModule],
  declarations: [AnimalUnitComponent, SystemComponent, SidebarComponent,  AddHorseDialogComponent, ResidentUnitComponent, OwnerUnitComponent, AddOwnerDialogComponent]

})

export class SystemModule {}
