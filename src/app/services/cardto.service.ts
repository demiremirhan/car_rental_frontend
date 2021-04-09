import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingularResponseModel } from '../models/singularResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardtoService {
  apiUrl:string="https://localhost:44356/api/";
  constructor( private httpClient: HttpClient) { }
  getCars(): Observable<ListResponseModel<CarDto>>{
    let newPath =this.apiUrl+"cars/getallcardetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetails(carId:number): Observable<SingularResponseModel<CarDto>>{
    let newPath = this.apiUrl+"cars/getbyid/?id="+carId;
    return this.httpClient.get<SingularResponseModel<CarDto>>(newPath);
  }
  getCarImages(carId : number) : Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"carimages/getimagesbycar?CarId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
