import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


export class Review {
  userId: string;
  hotelId: string;
  date: Date;
  title: string;
  description: string;
  overAllRating: number;
  locationRating: number;
  serviceRating: number;
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class ReviewService{
  
    constructor(private http: HttpClient, private router:Router, private route: ActivatedRoute){}
  
    getReviews = (hotelId : number)=>{
      console.log("@fetching reviews ... ")
      let reviews = this.http
      .get('http://localhost:3000/api/getReviews')
      .pipe(map(reviews => reviews));
      console.log("List of hotles : ", reviews)
      return reviews;
    }

    findReviewsByHotel = (hotelId : string) =>{
      console.log("hotel id in side find review by hotel id : ", hotelId)
      //hotelId = "hotel2"; //temp hardcoded
      return this.http
      .get('http://localhost:3000/api/reviewsByHotelId?hotelId='+hotelId)
      .pipe(map(reviews => reviews));
      
    }

    createReview = (review: Review) => {
      console.log("Review @create Review : ", review);
      review.date = new Date();
      this.http.post<any>("http://localhost:3000/api/createReview", review).subscribe(
      (res) => this.router.navigate(['/hotels']),
      (err) => console.log(err)
    );

      //return this.http.post<Review>("http://localhost:3000/api/createReview", review, httpOptions);
        // .pipe(
        //   catchError(this.handleError('createReview', review))
        // );
    }
  
}





