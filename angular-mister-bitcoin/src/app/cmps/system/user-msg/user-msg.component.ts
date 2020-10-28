import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserMsg } from 'src/app/models/user-msg.model';
import { UserMsgService } from 'src/services/system/user-msg.service';

@Component({
  selector: 'user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.scss']
})
export class UserMsgComponent implements OnInit {
  msg: UserMsg
  subscription: Subscription
  constructor(private userMsgService: UserMsgService) { }

  ngOnInit(): void {
    this.userMsgService.setUserMsg()
    this.subscription = this.userMsgService.userMsg$.subscribe(userMsg => {
      this.msg = userMsg
    })
    console.log(this.msg);
    
  }

}
