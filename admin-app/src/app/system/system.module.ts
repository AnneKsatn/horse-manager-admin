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
import {FormsModule} from '@angular/forms';

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
import { CategoryCardComponent } from './category/category-card/category-card.component';
import {MatSelectModule} from '@angular/material/select';
import { EditTimeComponent } from './feed/edit-time/edit-time.component';
import { HorseProfileComponent } from './animal-unit/horse-profile/horse-profile.component';
import { FeedingComponent } from './animal-unit/horse-profile/feeding/feeding.component';
import { VetComponent } from './vet/vet.component';
import { InspectionsComponent } from './vet/inspections/inspections.component';
import { CreateVetInspectionComponent } from './vet/create-vet-inspection/create-vet-inspection.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EditVetInspectionComponent } from './vet/edit-vet-inspection/edit-vet-inspection.component';
import { InfoVetInspectionComponent } from './vet/info-vet-inspection/info-vet-inspection.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { CreateCategoryServiceComponent } from './category/create-category-service/create-category-service.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import { CategoryComponent } from './category/category.component';
import { FeedComponent } from './feed/feed.component';
import {SidebarModule} from 'primeng/sidebar';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { CreateStableComponent } from './infrastructure/create-stable/create-stable.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {TabViewModule} from 'primeng/tabview';
import { StablesComponent } from './infrastructure/stables/stables.component';
import { StableListComponent } from './infrastructure/stables/stable-list/stable-list.component';


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
    DragDropModule, MatTableModule, MatSortModule, MatSidenavModule, MatTreeModule, SidebarModule, DropdownModule,
    FormsModule,
     InputNumberModule, CheckboxModule, MatCheckboxModule, FileUploadModule, HttpClientModule, TabViewModule],
    
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
    CategoryCardComponent,  
    EditTimeComponent, HorseProfileComponent, 
    FeedingComponent, VetComponent,
    InspectionsComponent, 
    CreateVetInspectionComponent,
    EditVetInspectionComponent, InfoVetInspectionComponent, 
    CreateCategoryComponent, EditCategoryComponent, CreateCategoryServiceComponent, CategoryComponent, FeedComponent, InfrastructureComponent, CreateStableComponent, StablesComponent, StableListComponent],
})

export class SystemModule {}
