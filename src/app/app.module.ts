import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import {MatCardModule, MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PriceFilterPipe } from './utilities/priceFilter';
import { CityFilterPipe } from './utilities/cityFilter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReviewComponent } from './review/review.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelService } from './hotel-list/hotel-listService';
import { HotelDetailService } from './hotel-detail/hotel-detailService';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewService } from './review-list/review-listService'

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    LoginComponent,
    UserComponent,
    ReviewComponent,
    HotelDetailComponent,
    PriceFilterPipe,
    CityFilterPipe,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
         path: 'hotels',
         component: HotelListComponent
      },
      {
        path: 'login',
        component: LoginComponent
     },
     {
      path: 'signUp',
      component: UserComponent
     },
     {
      path: 'hotelDetail/:hotelId',
      component: HotelDetailComponent
     },
     {
      path: 'review/:hotelId',
      component: ReviewComponent
    }
   ])
  ],
  providers: [HotelService, HotelDetailService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
