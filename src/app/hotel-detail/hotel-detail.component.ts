import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HotelDetailService } from './hotel-detailService';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  hotelId: string;
  hotel: any;
  constructor(private route: ActivatedRoute, private hotelDetailService: HotelDetailService ) { 
    console.log("inside hotle detail constructor");
  }

  ngOnInit() {
    console.log("test hoteldetail comp")
    this.route.params.subscribe(params => {
    console.log("Params in init in hotelDetail component : ", params);

    this.hotelId = params.hotelId;
    
    this.hotelDetailService.getHotel(this.hotelId)
    .subscribe(data => (this.hotel = data[0]));
    });
    // this.route.queryParams
    //   .pipe(filter(params => params.hotelId))
    //   .subscribe(params => {
    //     console.log(params);

    //     this.hotelId = params.hotelId;
    //     console.log(this.hotelId);
    //   });
  }

}
