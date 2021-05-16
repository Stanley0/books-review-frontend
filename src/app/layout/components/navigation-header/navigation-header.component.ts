import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit, OnDestroy {
  public userIsAuthenicated = false;
  private authListenerSubs!: Subscription; //why ?

  public get isInBookModule() {
    return this.router.url === "/" || this.router.url.includes("/books");
  }

  constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
      this.userIsAuthenicated = this.authService.getisAuth();
      this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenicated => {
        this.userIsAuthenicated = isAuthenicated;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();

  }

}
