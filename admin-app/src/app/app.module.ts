import { ResidentService } from './shared/resident.service';
import { OwnerService } from './shared/owners.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemModule } from './system/system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SystemModule
  ],
  providers: [OwnerService, ResidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
