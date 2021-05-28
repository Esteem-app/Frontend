import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';



@NgModule({
  declarations: [ProfileComponent, ProfileInfoComponent, ProfileSettingsComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
