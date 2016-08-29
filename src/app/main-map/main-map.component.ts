import { Component } from '@angular/core';

import { AuthService } from "../shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'pf-main-map',
  templateUrl: 'main-map.component.html',
  styleUrls: ['main-map.component.css']
})
export class MainMapComponent  {

    items: Array<any> = [];
    labeledIcons: Array<any> = [];

    constructor(private authService: AuthService) {

        this.items = [{
            "title": "Home",
            "link": "Home",
            "icon": "home"
        }, {
            "title": "About Us",
            "link": "#/"
        }, {
            "title": "Contact",
            "link": "#/"
        }];

        this.labeledIcons = [{
            "title": "Games",
            "link": "Home",
            "icon": "gamepad"
        }, {
            "title": "Chanel",
            "link": "Chanel",
            "icon": "video camera"
        }, {
            "title": "Videos",
            "link": "Videos",
            "icon": "video play"
        }];

    }

    isAuth() {
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.signOut();
    }








}
