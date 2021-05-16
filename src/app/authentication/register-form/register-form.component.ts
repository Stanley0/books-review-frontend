import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {


  constructor(public authService: AuthService,) { }


  onRegister(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.authService.createUser(form.value.nickname, form.value.email, form.value.password)
  }

  ngOnInit(): void {


  }

}
