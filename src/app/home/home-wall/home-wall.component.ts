import { Component, OnInit } from '@angular/core';
import { Achievement } from '../achievement.model';

@Component({
  selector: 'app-home-wall',
  templateUrl: './home-wall.component.html',
  styleUrls: ['./home-wall.component.scss']
})
export class HomeWallComponent implements OnInit {

  achievements: Achievement[] = [
    {
      id: 1,
      content: "I've made a bed",
      owner: "Ula",
      created: "29.05.2021 11:54",
    },
    {
      id: 2,
      content: "I've been at work on time",
      owner: "Ula",
      created: "28.05.2021 20:82",
    },
    {
      id: 3,
      content: "I had the best idea at work",
      owner: "Ula",
      created: "20.05.2021 10:00",
    },
    {
      id: 1,
      content: "I've made a bed",
      owner: "Ula",
      created: "29.05.2021 11:54",
    },
    {
      id: 2,
      content: "I've been at work on time",
      owner: "Ula",
      created: "28.05.2021 20:82",
    },
    {
      id: 3,
      content: "I had the best idea at work",
      owner: "Ula",
      created: "20.05.2021 10:00",
    },
    {
      id: 1,
      content: "I've made a bed",
      owner: "Ula",
      created: "29.05.2021 11:54",
    },
    {
      id: 2,
      content: "I've been at work on time",
      owner: "Ula",
      created: "28.05.2021 20:82",
    },
    {
      id: 3,
      content: "I had the best idea at work",
      owner: "Ula",
      created: "20.05.2021 10:00",
    },
  ];
  newAchievement = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
