import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    sessionStorage.setItem('username', this.username.value);
    this.username = null;
    this.password = null;
  }


  
}
