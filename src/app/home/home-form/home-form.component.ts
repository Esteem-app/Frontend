import { Component, OnInit } from '@angular/core';
import { AchievementFormModel } from '../achievement-form.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {

  newAchievement = '';
  achievementForm = new AchievementFormModel('');
  
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }
  
  addAchievement() {
    this.homeService.addAchievement(this.achievementForm);
  }

}
