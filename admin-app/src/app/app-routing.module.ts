import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { SystemComponent } from './system/system.component';
import { AnimalUnitComponent } from './system/animal-unit/animal-unit.component';
import { ResidentUnitComponent } from './system/animal-unit/resident-unit/resident-unit.component';
import { VeterinaryComponent } from './system/animal-unit/veterinary/veterinary.component';
import { CareComponent } from './system/animal-unit/care/care.component';
import { WalkingComponent } from './system/animal-unit/walking/walking.component';
import { WalletComponent } from './system/wallet/wallet.component';
import { CurrentMonthComponent } from './system/wallet/current-month/current-month.component';
import { MainComponent } from './system/main/main.component';
import { DashboardComponent } from './system/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';


const routes: Routes = [

  { path: '', redirectTo: 'system', pathMatch: 'full' },
  {
    path: 'system',
    loadChildren: () => import('./system/system.module').then( m => m.SystemModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'auth', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent}
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
