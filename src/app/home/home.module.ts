import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeWallComponent } from './home-wall/home-wall.component';


@NgModule({
  declarations: [HomeComponent, HomeFormComponent, HomeWallComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    // MatGridListModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class HomeModule { }
