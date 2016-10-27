import { Component, OnInit } from '@angular/core';
// import { SafeStyle, DomSanitizationService } from '@angular/platform-browser';
import { AngularFire } from "angularfire2";

import { AuthService } from "../shared/auth.service";


@Component({
    selector: 'pf-homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    images: string[] = ['bg-1.jpg', 'bg-.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg', 'bg-6.jpg'];
    bg: string;
    private isAuthenticated: boolean;

    constructor(
        private authService: AuthService,
        private af: AngularFire
    ) {}

    ngOnInit(): any {
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

    // getBg() {
    //   let random = Math.floor((Math.random() * this.images.length) + 1);
    //   return "url('../assets/images/bg-" + random + ".jpg')";
    // }
}
