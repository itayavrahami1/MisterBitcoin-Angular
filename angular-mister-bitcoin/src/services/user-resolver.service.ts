import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<Observable<User>> {

  constructor(public userService: UserService) { }

  resolve(): Observable<User> {
    const user = this.userService.getUser()
    console.log(user);
    return user
    // return this.userService.getUser()
  }
}

