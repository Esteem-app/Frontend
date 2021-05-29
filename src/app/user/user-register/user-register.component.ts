import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../../register.service';
import {User} from '../../../shared/model/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  flag = true;
  user: User;

  constructor(private  router: Router, private registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.resetForm();

  }


  resetForm(form?: NgForm) {
    if (form !== null) {
      this.user = {
        email: '',
        password: ''
      };
    }
  }

  cancel() {
    this.router.navigate(['/home']);
    this.resetForm();
  }

  register() {
    this.registerService.register();
  }
}
