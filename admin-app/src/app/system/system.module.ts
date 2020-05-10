import { OwnerService } from './../shared/owners.service';
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
import { DeleteHorseDialogComponent } from './animal-unit/resident-unit/delete-horse-dialog/delete-horse-dialog.component';
import { CareComponent } from './animal-unit/care/care.component';
import { VeterinaryComponent } from './animal-unit/veterinary/veterinary.component';
import { WalkingComponent } from './animal-unit/walking/walking.component';
import { WalletComponent } from './wallet/wallet.component';
import { CurrentMonthComponent } from './wallet/current-month/current-month.component';
import { HorseRowComponent } from './animal-unit/resident-unit/horse-row/horse-row.component';
import { MainComponent } from './main/main.component';
import {MatCardModule} from '@angular/material/card';
import { JoinHorseDialogComponent } from './main/join-horse-dialog/join-horse-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryCardComponent } from './dashboard/category-card/category-card.component';
import {MatSelectModule} from '@angular/material/select';
import { FeedingTimeComponent } from './dashboard/feeding-time/feeding-time.component';
import { EditTimeComponent } from './dashboard/feeding-time/edit-time/edit-time.component';
import { HorseProfileComponent } from './animal-unit/horse-profile/horse-profile.component';
import { FeedingComponent } from './animal-unit/horse-profile/feeding/feeding.component';



@NgModule({
  imports: [CommonModule, 
    SharedModule, 
    SystemRoutingModule, 
    MatGridListModule, 
    MatTabsModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule],
    
  declarations: 
  [AnimalUnitComponent, 
    SystemComponent, 
    SidebarComponent,  
    DeleteHorseDialogComponent, 
    ResidentUnitComponent, 
    CareComponent, 
    VeterinaryComponent, 
    WalkingComponent, 
    WalletComponent, 
    CurrentMonthComponent, 
    HorseRowComponent, MainComponent, JoinHorseDialogComponent, DashboardComponent, CategoryCardComponent, FeedingTimeComponent, EditTimeComponent, HorseProfileComponent, FeedingComponent],
})

export class SystemModule {}
