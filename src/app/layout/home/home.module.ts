import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [MatCheckboxModule, MatSidenavModule,MatDividerModule,
    MatToolbarModule,MatListModule,MatExpansionModule,MatCardModule,
    MatButtonModule, MatIconModule, FlexLayoutModule,MatMenuModule],
  exports: [MatCheckboxModule,
    MatButtonModule, MatSidenavModule,MatExpansionModule,MatCardModule,MatMenuModule,
    MatToolbarModule, MatIconModule,MatListModule,FlexLayoutModule,MatDividerModule]
})

export class MaterialModule {

}


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    CarouselModule,
    MaterialModule
  ]
})
export class HomeModule { }





