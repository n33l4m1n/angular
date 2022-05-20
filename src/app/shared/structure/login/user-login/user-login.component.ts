import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    sessionStorage.setItem('username', this.username.value);
    this.username;
    this.password;
  }


  
}
