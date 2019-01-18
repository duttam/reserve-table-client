import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  restaurants:Restaurant[];
  selectedRestaurant:Restaurant={"name":"","id":""};

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurants=this.restaurantService.getRestaurants();

  }
  changeColor(restaurant){
    this.selectedRestaurant=restaurant;
    console.log("restaurant "+ restaurant.name);

  }

}
