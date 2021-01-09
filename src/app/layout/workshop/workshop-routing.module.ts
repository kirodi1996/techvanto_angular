import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkShopComponent } from './workshop.component';

const routes: Routes = [
  {path:'',component:WorkShopComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopRoutingModule { }
