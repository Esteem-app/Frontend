import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  flag = true;
  email = '';
  password = '';

  constructor(private  router: Router) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.email = '';
    this.password = '';
    this.router.navigate(['/home']);

  }
}
