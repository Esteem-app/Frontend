import { Component, OnInit } from '@angular/core';
import { AchievementFormModel } from './achievement-form.model';
import { Achievement } from './achievement.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  achievements: Achievement[] = [];
  newAchievement = '';
  achievementForm = new AchievementFormModel('');
  
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }
  
  getAchievements() {
    this.homeService.getAchievements().subscribe({
      next: (resp: Achievement[]) => this.achievements = resp
    });;
  }
  
  addAchievement() {
    this.homeService.addAchievement(this.achievementForm);
    this.getAchievements();
  }

}
