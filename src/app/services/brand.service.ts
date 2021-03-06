import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService { //bir servisten yararlanmak için api arasındaki ilikşi kaynağı bu şkeilde kullanılır
  apiUrl = "https://localhost:44356/api/brands/getall";
  constructor(private httpClient: HttpClient) { }

  getBrands() :Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
    }
}
