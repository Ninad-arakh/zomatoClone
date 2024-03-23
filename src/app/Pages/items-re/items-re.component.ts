import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from 'src/app/Service/master.service';

@Component({
  selector: 'app-items-re',
  templateUrl: './items-re.component.html',
  styleUrls: ['./items-re.component.css']
})
export class ItemsReComponent implements OnInit {
  obj = { name: "" };
  item:any[] = [];

  constructor(private avtiv: ActivatedRoute, private http: MasterService, private route:Router) {
    this.avtiv.params.subscribe((data: any) => {
      console.log("Data Received From Params", data);
      this.obj = data;      
    });
  }

  ngOnInit(): void {
    this.show();
  }

  show() {
    this.http.getResto(this.obj.name).subscribe(
      (res: any) => {
        this.item = res.data;
        
      
      },
      (error: any) => {
        console.error('Error fetching restaurant data:', error);
        
      }
    );
  }

  onItem(shop:any){
    this.route.navigate(['/item' ,shop.restaurentId, this.obj.name]);
  }
}
