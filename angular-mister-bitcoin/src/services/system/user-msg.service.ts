import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserMsg } from 'src/app/models/user-msg.model';

@Injectable({
  providedIn: 'root'
})
export class UserMsgService {

  private _userMsg$ = new BehaviorSubject<UserMsg>(null)
  public userMsg$ = this._userMsg$.asObservable()

  constructor() { }

  public setUserMsg(msg = { txt: '', type: '' }): void {
    const msgToReturn = msg.txt ? msg : null
    this._userMsg$.next(msgToReturn)
    setTimeout(() => {
      this._userMsg$.next(null)
    }, 2000);
  }
}
