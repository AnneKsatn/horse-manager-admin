import { CurrentMonthComponent } from './wallet/current-month/current-month.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalkingComponent } from './animal-unit/walking/walking.component';
import { CareComponent } from './animal-unit/care/care.component';
import { VetComponent } from './vet/vet.component';
import { ResidentUnitComponent } from './animal-unit/resident-unit/resident-unit.component';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { AnimalUnitComponent } from './animal-unit/animal-unit.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { HorseProfileComponent } from './animal-unit/horse-profile/horse-profile.component';
import { InspectionsComponent } from './vet/inspections/inspections.component';
import { CreateVetInspectionComponent } from './vet/create-vet-inspection/create-vet-inspection.component';
import { EditVetInspectionComponent } from './vet/edit-vet-inspection/edit-vet-inspection.component';
import { InfoVetInspectionComponent } from './vet/info-vet-inspection/info-vet-inspection.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { CategoryComponent } from './category/category.component';
import { FeedComponent } from './feed/feed.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { CreateStableComponent } from './infrastructure/create-stable/create-stable.component';

const routes: Routes = [
  {path: '', component: SystemComponent,  children: [
    {path: 'maintenance', component: AnimalUnitComponent,  children: [
      {path: 'clients', component: ResidentUnitComponent},
      {path: 'care', component: CareComponent},
      {path: 'walking', component: WalkingComponent},
      {path: 'profile', component: HorseProfileComponent}
    ]},
    {path: 'wallet', component: WalletComponent , children: [
      {path: 'current', component: CurrentMonthComponent},
    ]},
    {path: 'main', component: MainComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'vet', component: VetComponent, children: [
      {path: 'inspection', component: InspectionsComponent},
      {path: 'create', component: CreateVetInspectionComponent},
      {path: 'edit', component: EditVetInspectionComponent},
      {path: 'info', component: InfoVetInspectionComponent}
    ]},
    {path: 'edit-category', component: EditCategoryComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'feed', component: FeedComponent},
    {path: 'create-stable', component: CreateStableComponent},
    {path: 'infrastructure', component: InfrastructureComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
