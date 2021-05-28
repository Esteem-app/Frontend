import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeWallComponent } from './home-wall/home-wall.component';


@NgModule({
  declarations: [HomeComponent, HomeFormComponent, HomeWallComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
