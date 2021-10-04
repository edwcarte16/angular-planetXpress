import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductInterface} from '../../../shared/models/produc.interface';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {
  }
  getProduct():Observable<ProductInterface>{
    return this.http.get<any>(`${environment.API_URL}/products`)
  }
}
