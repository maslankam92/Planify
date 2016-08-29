import { Component } from '@angular/core';

import { AuthService } from "../shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'pf-main-map',
  templateUrl: 'main-map.component.html',
  styleUrls: ['main-map.component.css']
})
export class MainMapComponent  {

    constructor(private authService: AuthService) {}

    isAuth() {
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.signOut();
    }
}
