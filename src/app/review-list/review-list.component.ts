import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from './review-listService';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input() hotelId : string;
  reviews : any;
  constructor(private reviewService : ReviewService) { }

  ngOnInit() {
    this.reviewService.findReviewsByHotel(this.hotelId)
    .subscribe(reviews => this.reviews = reviews);
  }

}
