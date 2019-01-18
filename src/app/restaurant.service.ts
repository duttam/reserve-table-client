import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants:Restaurant[];

  constructor() {
    this.restaurants=[{"name":'java and internet',"id":"tang"} , 
                   {"name":'algorithm',"id":"phillips"}, 
                    { "name":'computer architecture',"id":"bryn"},
                 { "name":'system programming',"id":"tang"}]
   }
  public  getRestaurants():Restaurant[]{
     return this.restaurants;
   }
}
