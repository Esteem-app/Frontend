import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeWallComponent } from './home-wall/home-wall.component';
import { FormsModule } from '@angular/forms';
import { HomeService } from './home.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeFormComponent,
    HomeWallComponent
  ],
  imports: [
    HomeRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [ HomeService ]
})
export class HomeModule { }
