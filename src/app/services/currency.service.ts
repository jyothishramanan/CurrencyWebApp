import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../config/api.config';


@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getExchangeRates(base: string): Observable<any> {
    debugger;
    const apiUrl = `https://api.exchangeratesapi.io/latest?base=${base}`;
    return this.http.get(apiUrl);
  }
  getAllCurrencies() {
    return this.http.get(`${api.api}`);
  }
  convertCurrency(to:string|undefined,currecyValue:Number)
  {
    debugger;
    const requestBody = {
      FromCurrencyCode: "EURO",
      ToCurrencyCode: to,
      CurrencyValue:currecyValue
    };
    return this.http.post<any>(`${api.api}`, requestBody);
  }
}
