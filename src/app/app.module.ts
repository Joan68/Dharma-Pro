import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { AgmCoreModule } from '@agm/core';

// For MDB Angular Pro
import { SidenavModule, WavesModule, AccordionModule } from 'ng-uikit-pro-standard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAtOzL5NHQp_B0rYun_OmZuhmq6KXyCKLE' }),
    SidenavModule,
    AccordionModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MDBSpinningPreloader,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
