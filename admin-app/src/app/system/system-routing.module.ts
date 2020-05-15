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
import { ResidentProcedureBaseComponent } from './vet/resident-procedure-base/resident-procedure-base.component';
import { CreateVetInspectionComponent } from './vet/create-vet-inspection/create-vet-inspection.component';
import { EditVetInspectionComponent } from './vet/edit-vet-inspection/edit-vet-inspection.component';
import { InfoVetInspectionComponent } from './vet/info-vet-inspection/info-vet-inspection.component';


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
      {path: 'base', component: ResidentProcedureBaseComponent},
      {path: 'create', component: CreateVetInspectionComponent},
      {path: 'edit', component: EditVetInspectionComponent},
      {path: 'info', component: InfoVetInspectionComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
