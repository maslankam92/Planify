import { Component } from '@angular/core';
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: 'pf-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent  {

    constructor(private authService: AuthService) { }

    isAuth() {
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.signOut();
    }

}
