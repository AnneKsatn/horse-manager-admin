import { VeterinaryComponent } from './animal-unit/veterinary/veterinary.component';
import { ResidentUnitComponent } from './animal-unit/resident-unit/resident-unit.component';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { AnimalUnitComponent } from './animal-unit/animal-unit.component';


const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
    {path: 'maintenance', component: AnimalUnitComponent, children: [
      {path: 'clients', component: ResidentUnitComponent},
      {path: 'veterenary', component: VeterinaryComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
