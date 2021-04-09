import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { CustomerDetail } from '../models/customerDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44356/api/customers/getall'

  constructor(private httpClient : HttpClient) { }

getCustomers() : Observable<ListResponseModel<CustomerDetail>> {
  return this.httpClient.get<ListResponseModel<CustomerDetail>>(this.apiUrl);
}
}
