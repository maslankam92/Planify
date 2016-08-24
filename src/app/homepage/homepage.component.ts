import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'pf-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent  {

  constructor(private authService: AuthService) { }

  isAuth() {
      return this.authService.isAuthenticated();
  }

  onLogout() {
      this.authService.signOut();
  }


}
