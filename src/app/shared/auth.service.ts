import { UserLogin } from "./user-login.interface";

declare var firebase: any;

export class AuthService {
    signupUser(user: UserLogin): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(this.handleError);
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

    saveNewUser(user) {
        return firebase.database().ref().child("users").push(user);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }

}