import {NgModule} from '@angular/core';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
  ],
  exports: [UserLoginComponent, UserRegisterComponent]
})

export class UserModule {
}
