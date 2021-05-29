import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AchievementFormModel } from './achievement-form.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }
  
  addAchievement(achievementForm: AchievementFormModel) {
    const apiUrl = 'http://localhost:8000/api/achievements/';
    console.log(achievementForm);
    return this.http.post(apiUrl, achievementForm);
  }
}
