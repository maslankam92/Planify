import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'pf-details-container',
  templateUrl: 'details-container.component.html',
  styleUrls: ['details-container.component.css']
})
export class DetailsContainerComponent  {

  constructor(private authService: AuthService) { }

  isAuth() {
      return this.authService.isAuthenticated();
  }


}
