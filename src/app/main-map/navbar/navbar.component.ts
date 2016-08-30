import { Component } from '@angular/core';
import { AuthService } from "../../shared/auth.service";

@Component({
    moduleId: module.id,
    selector: 'pf-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
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
