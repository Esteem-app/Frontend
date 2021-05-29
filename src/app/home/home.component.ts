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
  achievementForm = new AchievementFormModel('');
  
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getAchievements();
  }
  
  getAchievements() {
    this.homeService.getAchievements().subscribe({
      next: (resp: Achievement[]) => this.achievements = resp
    });;
  }
  
  addAchievement() {
    this.homeService.addAchievement(this.achievementForm);
    this.achievements.unshift({
      id: 1,
      content: this.achievementForm.content,
      owner: "string",
      created: "just now"
  })
    // setTimeout(() => this.getAchievements(), 3000);
  }

}
