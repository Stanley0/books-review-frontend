import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {



  constructor(public authService: AuthService) { }

  onLogin(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.nickname, form.value.email, form.value.password)
  }

  ngOnInit(): void {
  }

}
