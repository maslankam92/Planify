import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {AngularFire} from "angularfire2";

@Component({
    selector: 'pf-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    private isAuthenticated: boolean;

    constructor(
        private authService: AuthService,
        private af: AngularFire
    ) {}

    ngOnInit(): void {
        this.checkAuthentication();
    }

    private checkAuthentication(): void {
        this.authService.isAuthenticated().subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
            } else {
                this.isAuthenticated = false;
            }
        })
    }

    onLogout() {
        this.authService.signoutUser();
    }
}
