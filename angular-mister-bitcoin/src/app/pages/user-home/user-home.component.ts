import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/services/bitcoin/bitcoin.service';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bitcoinService: BitcoinService) { }
  user: User
  rate: Object = null
  ngOnInit(): void {
    // TODO - FIX THE getUser TO getUserByParam OR by loggedInUser

    this.user = this.route.snapshot.data.user[0]
    this.rate = this.route.snapshot.data.rate
  }
  getRate(): void {
    const rate = this.bitcoinService.getRate()
  }
  getMoves() {
    return this.user.moves.length ? this.user.moves : 'no moves made'
  }

}
