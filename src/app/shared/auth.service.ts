import { Injectable } from "@angular/core";
import { AngularFire, FirebaseAuthState } from "angularfire2";

import { UserLogin } from "./user-login.interface";

@Injectable()
export class AuthService {

    constructor(private af: AngularFire) {}

    /**
     * @param {UserLogin} user Data provided by the user in order to create an account.
     * Creates a new user account in the firebase.
     * @returns {firebase.Promise<FirebaseAuthState>}
     * */

    public signupUser(user: UserLogin): firebase.Promise<FirebaseAuthState> {
        return this.af.auth.createUser({email : user.email, password: user.password});
    }

    /**
     * Creates a new user account in firebase database in '/users' entity.
     * @param {object} user Data about the user account.
     * @returns {firebase.database.ThenableReference}
     * */
    public saveNewUserInDatabase(user): firebase.database.ThenableReference {
        return firebase.database().ref().child("users").push(user);
    }

    signinUser(user: UserLogin): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(this.handleError);
    }

    signOut() {
        firebase.auth().signOut();
    }

    isAuthenticated() {
        var user = firebase.auth().currentUser;

        if(user) {
            return true;
        } else {
            return false;
        }
    }



    private handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }

}