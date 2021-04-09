import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {
apiUrl : string ="https://localhost:44356/api/carimages/";
  constructor(private httpClient :HttpClient) { }

  getImagesByCarId(carId:number) : Observable<ListResponseModel<CarImage>> {
    let newPath= this.apiUrl+"getimagesbycarid/?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
