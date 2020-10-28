import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// const axios = require('axios');

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private httpService: HttpClient) { }

  public getRate(): Observable<object> {
    // public async getRate(): Promise<object> {
    //   const rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    //   console.log(rate);
    //   return rate

    console.log('service');
    const rate = this.httpService.get('https://blockchain.info/tobtc?currency=USD&value=1')
    console.log(rate);
    return rate

    // return this.httpService.get('https://blockchain.info/tobtc?currency=USD&value=1')
  }
}
