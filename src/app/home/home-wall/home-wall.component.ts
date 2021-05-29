import { Component, OnInit } from '@angular/core';
import { Achievement } from '../achievement.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-wall',
  templateUrl: './home-wall.component.html',
  styleUrls: ['./home-wall.component.scss']
})
export class HomeWallComponent implements OnInit {

  achievements: Achievement[] = [];
  newAchievement = '';
  
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getAchievements();
  }
  
  getAchievements() {
    this.homeService.getAchievements().subscribe({
      next: (resp: Achievement[]) => this.achievements = resp
    })
  }

}
