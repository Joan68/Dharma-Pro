import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MassageComponent } from './massage/massage.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'massage', component: MassageComponent },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
