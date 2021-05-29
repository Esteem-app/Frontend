import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  flag = true;
  user: User = new User('', '');

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form !== null) {
      this.user.email = '';
      this.user.password = '';
    }
  }

  cancel() {
    this.resetForm();
    this.router.navigate(['/home']);
  }

  register() {
    this.userService.register(this.user);
    window.alert("Succesfully registered, please login");
    this.router.navigate(['/login']);
  }
}
