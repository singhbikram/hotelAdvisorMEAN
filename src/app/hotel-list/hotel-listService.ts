import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class Hotel {
  hotelId: number;
  name: string;
  city: string;
  state: string;
  price: string;
}
@Injectable()
export class HotelService{

    constructor(private http: HttpClient){}

    getHotels = (hotelId : number)=>{
      console.log("@fetching hotels ... ")
      let hotlesList = this.http
      .get('http://localhost:3000/api/getHotels')
      .pipe(map(hotels => hotels));
      //.get('../../assets/hotels.json')
      //.pipe(map(hotels => hotels['data']));
      console.log("List of hotles : ", hotlesList)
      return hotlesList;
    }

    createHotel = () =>{
      //http://localhost:3000/api/createHotel
    }

    findHotelByCity = (city : string) =>{
      return this.http
      .get('http://localhost:3000/api/findHotelByCity?city='+city)
      .pipe(map(hotels => hotels['data']));
      
    }
}




