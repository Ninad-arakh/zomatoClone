import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zomato';


  constructor(private route:Router){}
  getCat(){
    this.route.navigate(['/home']);
  }

  about(){
    this.route.navigate(['/about']);
  }
  contact(){
    this.route.navigate(['/contact']);
  }
}
