import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
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
