import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';



@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent, UserSettingsComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
