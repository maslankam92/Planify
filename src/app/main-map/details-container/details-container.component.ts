import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/auth.service";

@Component({
  selector: 'pf-details-container',
  templateUrl: 'details-container.component.html',
  styleUrls: ['details-container.component.scss']
})
export class DetailsContainerComponent  {

  constructor(private authService: AuthService) { }

  isAuth() {
      return this.authService.isAuthenticated();
  }


}
