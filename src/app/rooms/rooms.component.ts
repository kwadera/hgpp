import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  isCheveronRight = true;
  isExpandMore = true;
  chevron_left_src  = '../assets/images/chevron_left.svg';
  chevron_right_src = '../assets/images/chevron_right.svg';
  expand_less_src   = '../assets/images/expand_less.svg';
  expand_more_src   = '../assets/images/expand_more.svg';


  constructor() { }

  ngOnInit() {
  }

  toggleCheveron(image:any, item) {
    item.toggleCheveronState = !item.toggleCheveronState
    // alert("Item toggle state for " + item.name + "  is "+ item.toggleCheveronState);
    if (item.toggleCheveronState) {
      image.src="../assets/images/chevron_left.svg"
    } else {
      image.src="../assets/images/chevron_right.svg"
    }
  }

  toggleExpand(image:any, item) {
    item.toggleCheveronState = !item.toggleCheveronState
    // alert("Item toggle state for " + item.name + "  is "+ item.toggleCheveronState);
    if (item.toggleCheveronState) {
      image.src="../assets/images/expand_less.svg"
    } else {
      image.src="../assets/images/expand_more.svg"
    }
  }

  rooms = [ 
    {
        name: "Class A Room",
        toggleCheveronState: false,
        description: "Tucked away amidst tropical foliage, and located on the ground floor of a 2 unit casita, these recently refreshed Garden View rooms are close to our lobby, restaurants and pools and are a short stroll to our palm-lined beach. Enjoy free WI-Fi while you relax and unwind in a Mayan inspired hammock.",
        displayImagePath: '../assets/images/restaurant.jpg',
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
      name: "Class B Room",
      toggleCheveronState: false,
      description: "Tucked away amidst tropical foliage, and located on the ground floor of a 2 unit casita, these recently refreshed Garden View rooms are close to our lobby, restaurants and pools and are a short stroll to our palm-lined beach. Enjoy free WI-Fi while you relax and unwind in a Mayan inspired hammock.",
      displayImagePath: '../assets/images/room_1.jpg',
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
