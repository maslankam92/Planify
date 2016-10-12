import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/auth.service";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
    selector: 'pf-details-container',
    templateUrl: 'details-container.component.html',
    styleUrls: ['details-container.component.scss']
})
export class DetailsContainerComponent implements OnInit {

    items: FirebaseListObservable<any[]>;

    constructor(private authService: AuthService, private af: AngularFire) { }

    isAuth() {
        return this.authService.isAuthenticated();
    }


    ngOnInit(): void {

        this.items = this.af.database.list('trips');
        console.log(this.items);
    }
}
