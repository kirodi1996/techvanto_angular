import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:[
      //{path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'workshop',loadChildren:() => import('./workshop/workshop.module').then(m => m.WorkshopModule)},
      {path:'summertraining',loadChildren:() => import('./summer-training/summer-training.module').then(m => m.SummerTrainingModule)}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
