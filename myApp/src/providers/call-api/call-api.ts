import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CallApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CallApiProvider Provider');
  }

  public GetAllProduct() {
    return this.http.get('https://localhost:5001/api/Product/GetAllProduct');
  }

  public GetProduct(id: string) {
    return this.http.get('https://localhost:5001/api/Product/GetProduct/' + id);
  }

  public CreateProduct(newproduct: any) {
    return this.http.post('https://localhost:5001/api/Product/CreateProduct', newproduct);
  }

}
