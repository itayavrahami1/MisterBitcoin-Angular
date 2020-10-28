import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinResolverService implements Resolve<Observable<object>> {

  constructor(private bitcoinService: BitcoinService) { }

  resolve(): Observable<object> {
    const rate = this.bitcoinService.getRate()
    console.log(rate);
    return rate
    // return this.bitcoinService.getRate()
  }
}
