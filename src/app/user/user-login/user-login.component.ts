import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  flag = true;
  user: User = new User('', '');
  
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.user.email = '';
    this.user.password = '';
    this.router.navigate(['/home']);
  }
  
  login() {
    this.userService.login(this.user);
    this.router.navigate(['/home']);
  }

}
