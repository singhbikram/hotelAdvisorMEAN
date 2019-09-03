import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReviewService, Review } from '../review-list/review-listService';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    locationRating: new FormControl(''),
    serviceRating: new FormControl('')
  });

  hotelId : string;
  constructor(private reviewService : ReviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hotelId = params.hotelId;
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("Submit Review was clicked ! ")
    console.log(this.review.value);
    let newReview : Review = this.review.value;
    newReview.hotelId =  this.hotelId;
    console.log("new Review : ", newReview);
    this.reviewService.createReview(newReview);
    
  }

}