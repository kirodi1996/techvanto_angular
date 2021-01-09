import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummerTrainingComponent} from './summer-training.component'

const routes: Routes = [
  {path:'',component:SummerTrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummerTrainingRoutingModule { }
