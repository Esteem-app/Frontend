import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../config/urls';
import { AuthResp } from './auth-resp.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: User) {
    const apiUrl = Urls.REGISTRATION;
    this.http.post(apiUrl, user).subscribe();
  }

  login(user: User) {
    const apiUrl = Urls.LOGIN;
    this.http.post<AuthResp>(apiUrl, user)
      .subscribe({
        next: (resp: AuthResp) => {
          localStorage.setItem('auth_token', JSON.stringify(resp.auth_token));
        }
      });
  }
}
