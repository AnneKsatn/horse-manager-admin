import { ResidentService } from './shared/resident.service';
import { OwnerService } from './shared/owners.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemModule } from './system/system.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthComponent } from './auth/auth.component'
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SystemModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  providers: [OwnerService, ResidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
