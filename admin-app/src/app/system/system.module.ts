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
import { VetComponent } from './vet/vet.component';
import { InspectionsComponent } from './vet/inspections/inspections.component';
import { ResidentProcedureBaseComponent } from './vet/resident-procedure-base/resident-procedure-base.component';
import { CreateVetInspectionComponent } from './vet/create-vet-inspection/create-vet-inspection.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EditVetInspectionComponent } from './vet/edit-vet-inspection/edit-vet-inspection.component';
import { InfoVetInspectionComponent } from './vet/info-vet-inspection/info-vet-inspection.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateCategoryComponent } from './dashboard/create-category/create-category.component';
import { EditCategoryComponent } from './dashboard/edit-category/edit-category.component';
import { CreateCategoryServiceComponent } from './dashboard/create-category-service/create-category-service.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  imports: [CommonModule, 
    SharedModule, 
    SystemRoutingModule, 
    MatGridListModule, 
    MatTabsModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    DragDropModule, MatTableModule, MatSortModule, MatCheckboxModule, MatSidenavModule, MatTreeModule],
    
  declarations: 
  [AnimalUnitComponent, 
    SystemComponent, 
    SidebarComponent,  
    DeleteHorseDialogComponent, 
    ResidentUnitComponent, 
    CareComponent,  
    WalkingComponent, 
    WalletComponent, 
    CurrentMonthComponent, 
    HorseRowComponent, MainComponent, 
    JoinHorseDialogComponent, DashboardComponent, 
    CategoryCardComponent, FeedingTimeComponent, 
    EditTimeComponent, HorseProfileComponent, 
    FeedingComponent, VetComponent,
    InspectionsComponent, ResidentProcedureBaseComponent,
    CreateVetInspectionComponent,
    EditVetInspectionComponent, InfoVetInspectionComponent, CreateCategoryComponent, EditCategoryComponent, CreateCategoryServiceComponent],
})

export class SystemModule {}
