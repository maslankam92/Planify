import { Injectable} from "@angular/core";
import {AngularFire, FirebaseAuthState, AuthMethods, AuthProviders, AngularFireAuth} from "angularfire2";
import { UserLogin} from "./user-login.interface";

@Injectable()
export class AuthService {

    private authConfig = {
        method: AuthMethods.Password,
        provider: AuthProviders.Password
    };

    constructor(private af: AngularFire) {
    }

    /**
     * @param {UserLogin} user Data provided by the user in order to create an account.
     * Creates a new user account in the firebase.
     * @returns {firebase.Promise<FirebaseAuthState>}
     * */
    public signupUser(user: UserLogin): firebase.Promise<FirebaseAuthState> {
        return this.af.auth.createUser({email: user.email, password: user.password});
    }

    /**
     * Creates a new user account in firebase database in '/users' entity.
     * @param {object} user Data about the user account.
     * @returns {firebase.database.ThenableReference}
     * */
    public saveNewUserInDatabase(user): firebase.database.ThenableReference {
        return firebase.database().ref().child("users").push(user);
    }

    /**
     * Logs a user in.
     * @param {UserLogin} user Data about the user account.
     * @returns {firebase.Promise<any>}
     * */
    public signinUser(user: UserLogin): firebase.Promise<any> {
        return this.af.auth.login(user, this.authConfig);
    }

    /**
     * Logs a user out.
     * @returns {void}
     * */
    public signoutUser(): void {
        this.af.auth.logout();
    }

    /**
     * Checks if the user is authenticated or not at current time.
     * @returns {AngularFireAuth} It has to be handled in caller component.
     * */
    public isAuthenticated(): AngularFireAuth {
        return this.af.auth;
    }


    public getUserId() {
        let userId = '';
        return this.af.auth.map(r => {
            setTimeout(()=>userId = r.uid,2000);
            console.log(userId);
        }).toPromise().then(r=> r);
        // return userId;
    }



}