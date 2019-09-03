import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class Hotel {
  name: string;
  city: string;
  state: string;
  price: string;
  amenities: [string]
}
@Injectable()
export class HotelDetailService{
    url:string;
    hotel: Hotel;

    constructor(private http: HttpClient){}

    getHotel = (hotelId : string)=>{
      console.log("@fetching hotel by id ... ");
      this.url  = "http://localhost:3000/api/findHotelById?id="+hotelId;
      console.log("hitting url : "+this.url)
      
      return this.http
      .get(this.url)
      .pipe(map(hotel => hotel));

      //.get('../../assets/hotels.json')
      //.pipe(map(hotels => hotels['data']));

      // console.log("List of hotel : ", hotel)
      // return hotel;
    }

}




