import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestCorComponent } from './project/test-cor/test-cor.component';
import { TestDfrComponent } from './project/test-dfr/test-dfr.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'project/cor', component: TestCorComponent },
  { path: 'project/dfr', component: TestDfrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
