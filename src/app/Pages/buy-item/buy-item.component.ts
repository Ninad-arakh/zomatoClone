import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {

  name:string ='';
  address:string = '';
  mobile:string = '';


  ngOnInit(): void {
    
  }
  place(na:string,add: string,mob:string){
      this.name=na;
      this.address=add;
      this.mobile=mob;
    
      alert(` 
            Order Placed Successfully !!!!\n
            Name : ${this.name}\n
            Address : ${this.address}\n 
            Mobile Number : ${this.mobile}
            `)
  }
}

