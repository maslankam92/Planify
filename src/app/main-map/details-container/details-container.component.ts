import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from "angularfire2";


import { PlanifyFirebase } from "../../shared/planify-firebase.service";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: 'pf-details-container',
    templateUrl: 'details-container.component.html',
    styleUrls: ['details-container.component.scss']
})
export class DetailsContainerComponent implements OnInit {

    private items;
    private isAuthenticated: boolean;
    private userId: string ;
    private tripName : string = '';

    constructor(
        private authService: AuthService,
        private af: AngularFire,
        private planiflyFirebaseService: PlanifyFirebase
    ) {}

    ngOnInit(): void {
        this.checkAuthentication();
    }

    private checkAuthentication(): void {
        this.authService.isAuthenticated().subscribe(user => {
            if (user) {
                this.userId = user.uid;
                this.isAuthenticated = true;
                this.af.database.list('trips')
                    .subscribe(trips => {
                        this.items = trips.filter(trip => trip.uid === this.userId);
                    });
            } else {
                this.isAuthenticated = false;
                this.userId = null;
            }
        })
    }

    onAddTrip() {
        const tripData = {
            tripName : this.tripName,
            uid : this.userId
        };
        this.planiflyFirebaseService.saveData(tripData)
            .then(tripKey => {
                console.log(`from component ${tripKey}`);
                this.tripName = null;
            });
    }
}
