import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from 'src/app/Service/master.service';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  recieved = { id: '', objName: '' };
  get: any[] = [];
  quant: number = 0;
  price!: number;
  ishidden: boolean = true;
  ishidden1: boolean = false;

  constructor(private master: MasterService, private activ: ActivatedRoute, private router:Router) {
    this.activ.params.subscribe((data: any) => {
      this.recieved = data;
    })
  }

  ngOnInit(): void {
    this.collectData();
  }

  collectData() {
    this.master.getResto(this.recieved.objName).subscribe((res: any) => {
      this.get = res.data;
    })
  }

  onincrease(price: number, price2: number) {

    this.quant++;
    this.price = this.quant * price2;
    this.ishidden = false;
    this.ishidden1 = true;
  }

  ondecre(price: number, price2: number) {
    if (this.price > 0) {
      this.quant--;
      this.price = this.quant * price2;
    }
  }

  buy(){
    if(this.quant != 0){
      this.router.navigate(['/buyItem']);
    }else{
      alert("Please add some items to buy");
    }
  }
}
