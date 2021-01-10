import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component'
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
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [MatCheckboxModule, MatSidenavModule,MatDividerModule,
    MatToolbarModule,MatListModule,MatExpansionModule,MatCardModule,
    MatButtonModule, MatIconModule, FlexLayoutModule,MatMenuModule],
  exports: [MatCheckboxModule,
    MatButtonModule, MatSidenavModule,MatExpansionModule,MatCardModule,MatMenuModule,
    MatToolbarModule, MatIconModule,MatListModule,FlexLayoutModule,MatDividerModule],
  declarations: []
})

export class MaterialModule {

}


@NgModule({
  declarations: [FooterComponent, HomeComponent,HeaderComponent,LayoutComponent],
  imports: [
    CommonModule,
    
    CarouselModule,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }





