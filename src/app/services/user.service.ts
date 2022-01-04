import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //   private _demoUser: User = {
  //     name: 'Ben Ernst',
  //     budget: 1000,
  //     tickets: [],
  //   };

  //   private _user$ = new BehaviorSubject<User>();
  //   public user$ = this._user$.asObservable();

  public getUser(): User {
    // this._user$.next(this._demoUser);
    return {
      name: 'Ben Ernst',
      budget: 1000,
      tickets: [],
    };
  }
}
