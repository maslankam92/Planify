import { UserLogin } from "./user-login.interface";

declare var firebase: any;

export class AuthService {
    signupUser(user: UserLogin) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(function(error) {
                console.log(error);
        });
    }

    signinUser(user: UserLogin) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(function(error) {
                console.log(error);
        });
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
}