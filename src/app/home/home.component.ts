import { Component } from '@angular/core';
import {RestaurantType} from "../restaurant/model/restaurant-type-enum.model";
import {RestaurantBody} from "../restaurant/model/restaurant-body.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  restaurant: RestaurantBody;

  constructor() {
    this.restaurant = new RestaurantBody(
      'La storia',
      RestaurantType.ITALIAN,
      'Rue du fort',
      'Comines',
      7780,
      'Belgium',
      'storia@test.be',
      '0475522132',
      'test',
      'BE123231'
    );
  }
}
