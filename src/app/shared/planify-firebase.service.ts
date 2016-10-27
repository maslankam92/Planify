import { Injectable } from "@angular/core";
import {AngularFire } from "angularfire2";

@Injectable()
export class PlanifyFirebase {

    constructor(private af: AngularFire) {}

    saveData(tripData: Object): firebase.Thenable<string> {
        const tripsURL = this.af.database.list('trips');
        return tripsURL.push(tripData)
            .then(trip => trip.key)
            .catch(err => console.log(`Trip has not been saved. ${err}`));
    }

}