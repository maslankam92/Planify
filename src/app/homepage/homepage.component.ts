import { Component, OnInit } from '@angular/core';
// import { SafeStyle, DomSanitizationService } from '@angular/platform-browser';
import { AuthService } from "../shared/auth.service";
import { AngularFire, FirebaseListObservable } from "angularfire2";


@Component({
    selector: 'pf-homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    images: string[] = ['bg-1.jpg', 'bg-.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg', 'bg-6.jpg'];
    bg: string;

    items: FirebaseListObservable <any[]>;


    constructor(private authService: AuthService, private af: AngularFire) {

        this.items = af.database.list('trips');

        console.log(af.database.list('trips'));
        console.log(this.items);

    }

    ngOnInit():any {
        // this.bg = this.getBg();

    }

    isAuth() {
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.signoutUser();
    }

    // getBg() {
    //   let random = Math.floor((Math.random() * this.images.length) + 1);
    //   return "url('../assets/images/bg-" + random + ".jpg')";
    // }
}
