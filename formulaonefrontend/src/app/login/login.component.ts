import { Component, OnInit } from '@angular/core';
import {AppService} from "../services/app.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");
    this.isUserLoggedIn = storeData != null && storeData == "true";
  }

  user: User = {
    id:0,
    username: '',
    password: ''
  };

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
    password: new FormControl('', Validators.required)
  });

  loginUser() {
    this.user.username = this.userForm.value.username!;
    this.user.password = this.userForm.value.password!;
    this.appService.loginUser(this.user).subscribe(user => {
      if(user != null) {
        localStorage.setItem('isUserLoggedIn', "true");
        this.router.navigateByUrl('/home');
      }
      else{
        console.log("something went wrong!")
      }
    }, error => {
      console.error('Wrong Username or Password!');
    });
  }

}
