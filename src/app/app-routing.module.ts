import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ItemsReComponent } from './Pages/items-re/items-re.component';
import { SelectedItemComponent } from './Pages/selected-item/selected-item.component';
import { BuyItemComponent } from './Pages/buy-item/buy-item.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component:LandingPageComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'contact', component:ContactComponent
  },
  {
    path: 'home', component:HomePageComponent
  },
  {
    path: 'selected/:name', component:ItemsReComponent
  },
  {
    path: 'item/:id/:objName', component:SelectedItemComponent
  },
  {
    path: 'buyItem', component:BuyItemComponent
  },
  {
    path: '**', component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
