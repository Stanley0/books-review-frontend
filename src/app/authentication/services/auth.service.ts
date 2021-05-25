import { Injectable } from '@angular/core';
import { AuthLoginData, AuthRegisterData } from './auth-data.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AppHttpClient } from 'src/app/app-common/app-http-client.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenTimer: any;
  private isAuthenticated = false;
  private token: any;  //to be becked why?!
  private authStatusListener = new Subject<boolean>();

  constructor(private httpClient: AppHttpClient, private router: Router) { }


  getToken() {
    return this.token
  }

  getisAuth() {
    return this.isAuthenticated //This will be used to allow'r'not user to do anything till he's logged in
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(nickname: string, email: string, password: string) {
    const authData: AuthRegisterData = {nickname: nickname, email: email, password: password};
    this.httpClient.post("/user/register", authData)
      .subscribe(response => {
        this.router.navigate(["/"]);

      })
  }


  login(email: string, password: string) {
     const authData: AuthLoginData = {email: email, password: password};
     this.httpClient.post<{token: string, expiresIn: number}>("/user/login", authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date( now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.saveAuthData(token,expirationDate )
          this.router.navigate(["/"]);
        }
      })
   }

   autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
   }

   logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
   }

   private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
  }, duration *1000);
   }


   private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
   }

   private clearAuthData () {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration")

   }

   private getAuthData() {
     const token = localStorage.getItem("token");
     const expirationDate = localStorage.getItem("expiration");
     if (!token || !expirationDate) {
       return;
     }
     return {
       token: token,
       expirationDate: new Date(expirationDate)
     }
   }








}
