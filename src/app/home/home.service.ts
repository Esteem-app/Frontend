import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AchievementFormModel } from './achievement-form.model';
import { Urls } from '../config/urls'
import { Achievement } from './achievement.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  achievements: Achievement[] = [];

  constructor(
    private http: HttpClient,
  ) { }
  
  addAchievement(achievementForm: AchievementFormModel) {
    const apiUrl = Urls.ACHIEVEMENTS_URL;
    
    const token = JSON.parse(localStorage.getItem('auth_token') || '{}');
    const headers = new HttpHeaders({'Authorization': 'Token ' + token});
    
    this.http.post(apiUrl, achievementForm, {headers}).subscribe({
      next: resp => console.log(resp)
    });
  }
  
  getAchievements() {
    const apiUrl = Urls.ACHIEVEMENTS_URL;
    
    const token = JSON.parse(localStorage.getItem('auth_token') || '{}');
    const headers = new HttpHeaders({'Authorization': 'Token ' + token});
    
    return this.http.get<Achievement[]>(apiUrl, {headers});
  }
}
