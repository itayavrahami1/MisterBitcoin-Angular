import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }
  user: User
  ngOnInit(): void {
    // TODO - FIX THE getUser TO getUserByParam OR by loggedInUser
    this.user = this.route.snapshot.data.user[0]
  }

  getMoves(){
    return this.user.moves.length ? this.user.moves:'no moves made'
  }

}
