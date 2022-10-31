import { Component, OnInit } from '@angular/core';
import {AppService} from "../services/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('isUserLoggedIn');
    this.router.navigateByUrl('/login');
  }

}
