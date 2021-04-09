import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './Components/car/car.component';
import { BrandComponent } from './Components/brand/brand.component';
import { NaviComponent } from './Components/navi/navi.component';
import { ColorComponent } from './Components/color/color.component';
import { RentalComponent } from './Components/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    RentalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
