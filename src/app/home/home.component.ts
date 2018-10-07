import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
      {
        imagePath: '../assets/images/room_1.jpg',
        imageAlt: 'Rooms',
        active: "active"
      },
      {
        imagePath: '../assets/images/restaurant.jpg',
        imageAlt: 'Restutant'
      },
      {
        imagePath: '../assets/images/lobby.jpg',
        imageAlt: 'Lobby'
      }
  ];

}
