import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Constants} from './constans';
import {User} from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register() {
  }
}
