import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Pages/about/about.component';
import { BuyItemComponent } from './Pages/buy-item/buy-item.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ItemsReComponent } from './Pages/items-re/items-re.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { SelectedItemComponent } from './Pages/selected-item/selected-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuyItemComponent,
    ContactComponent,
    HomePageComponent,
    ItemsReComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    SelectedItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
