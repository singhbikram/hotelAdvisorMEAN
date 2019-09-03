import { Component, OnInit, Input, Output } from '@angular/core';

import { HotelService, Hotel } from './hotel-listService'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @Output() changed = new EventEmitter<Hotel>();
  selectedHotel: Hotel;
  constructor(private hotelService : HotelService) { }
  @Input() hotelId: number;
  hotels: any;

  ngOnInit() {
    this.hotelService.getHotels(this.hotelId) //hotel.Id is not used
    .subscribe(hotels => (this.hotels = hotels));
  }

  select(selectedHotel: Hotel){
    this.selectedHotel = selectedHotel;
    this.changed.emit(selectedHotel);
  }


}


// export class CharactersComponent implements OnInit {
// @Output changed = new EventEmitter<Character>();
 
// select(selectedCharacter: Character){
//   this.selectedCharacter = selectedCharacter;
//   this.changed.emit(selectedCharacter);
// }
// }