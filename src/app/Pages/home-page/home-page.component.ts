import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/Service/master.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  categories:any[] = [];

  constructor(private http: MasterService, private route:Router){}
  ngOnInit(): void {
    this.getCategories();
  }

  onItemClick(obj: any){
    console.log (obj);
    this.route.navigate(['/selected' , obj.shopName])
  }

  getCategories(){
    return this.http.getCat().subscribe((res:any)=>{
      this.categories = res;
    })
  }
}
