import { CurrentMonthComponent } from './wallet/current-month/current-month.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalkingComponent } from './animal-unit/walking/walking.component';
import { CareComponent } from './animal-unit/care/care.component';
import { VeterinaryComponent } from './animal-unit/veterinary/veterinary.component';
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


const routes: Routes = [
  {path: '', component: SystemComponent,  children: [
    {path: 'maintenance', component: AnimalUnitComponent,  children: [
      {path: 'clients', component: ResidentUnitComponent},
      {path: 'veterenary', component: VeterinaryComponent},
      {path: 'care', component: CareComponent},
      {path: 'walking', component: WalkingComponent},
      {path: 'profile', component: HorseProfileComponent}
    ]},
    {path: 'wallet', component: WalletComponent , children: [
      {path: 'current', component: CurrentMonthComponent},
    ]},
    {path: 'main', component: MainComponent},
    {path: 'dashboard', component: DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
