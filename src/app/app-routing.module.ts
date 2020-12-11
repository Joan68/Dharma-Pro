import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MassageComponent } from './massage/massage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SoinsComponent } from "./soins/soins.component";
import { TemoignageComponent } from "./temoignage/temoignage.component";
import { NutritionComponent } from "./nutrition/nutrition.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'massage', component: MassageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'soins', component: SoinsComponent },
  { path: 'temoignage', component: TemoignageComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path : 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
