import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { RateService } from '../../services/rate.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  // user$: Observable<User>;
  user: User = null;
  userILSrate: number;

  constructor(
    private userService: UserService,
    private rateService: RateService
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = this.userService.getUser();
    // this.user$ = this.userService.user$;

    const ILSrate = await this.rateService.getRate();
    this.userILSrate = +(this.user.budget * ILSrate).toFixed(0);
  }
}
