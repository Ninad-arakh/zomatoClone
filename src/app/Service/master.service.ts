import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // catUrl: string = 'https://array-api.onrender.com/get/categories'
  // urlResto: string = 'https://array-api.onrender.com/restaurant'

  //used github to get the response fast
  catUrl: string = 'https://ninad-arakh.github.io/zomato-json/categories.json';
  urlResto: string = 'https://ninad-arakh.github.io/zomato-json';


  constructor(private htt: HttpClient) { }

  //get categories for all the food items
  getCat() {
    return (this.htt.get(this.catUrl));
  }

  //get food categories by category
  getResto(endpoint: string) {
    return (this.htt.get(`${this.urlResto}/${endpoint}.json`));
  }
}
