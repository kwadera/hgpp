import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rooms = [ 
    {
        name: "Class A Room",
        description: "Tucked away amidst tropical foliage, and located on the ground floor of a 2 unit casita, these recently refreshed Garden View rooms are close to our lobby, restaurants and pools and are a short stroll to our palm-lined beach. Enjoy free WI-Fi while you relax and unwind in a Mayan inspired hammock.",
        images: [
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
        ],

    },
    {
      name: "Class A Room",
      description: "Tucked away amidst tropical foliage, and located on the ground floor of a 2 unit casita, these recently refreshed Garden View rooms are close to our lobby, restaurants and pools and are a short stroll to our palm-lined beach. Enjoy free WI-Fi while you relax and unwind in a Mayan inspired hammock.",
      images: [
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
      ],

  }
]

}
