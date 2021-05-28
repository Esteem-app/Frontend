import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeWallComponent } from './home-wall/home-wall.component';
import { HomeFormComponent } from './home-form/home-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeWallComponent,
    HomeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
