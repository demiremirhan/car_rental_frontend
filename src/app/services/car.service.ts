import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  //bir servisten yararlanmak için api arasındaki ilikşi kaynağı bu şkeilde kullanılır
  apiUrl = 'https://localhost:44356/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getbybrand/?brandID=" +brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl+"cars/getbybrand/?brandID=" +colorId;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
