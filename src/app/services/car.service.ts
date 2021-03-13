import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService { //bir servisten yararlanmak için api arasındaki ilikşi kaynağı bu şkeilde kullanılır
  apiUrl = "https://localhost:44356/api/cars/getall";
  constructor(private httpClient: HttpClient) { }

  getCars() :Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
    }
}
