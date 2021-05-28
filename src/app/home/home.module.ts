import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeWallComponent } from './home-wall/home-wall.component';



@NgModule({
  declarations: [HomeFormComponent, HomeWallComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
