import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbdTableComplete } from './table-complete/table-complete.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'table', component:NgbdTableComplete},
  {path: 'heroes', component:HeroesComponent},
  {path: 'detail/:id', component:HeroDetailComponent},
  {path: 'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
