import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../shared/auth.service";

@Component({
    selector: 'pf-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.scss']
})
export class SignupComponent implements OnInit {

    private signupForm: FormGroup;
    private passwordsEqual: boolean = false;
    private successInfo: any;
    private tempSuccessInfo: any;
    private errorInfo: any;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    /**
     * Creates a signup form and watches whether
     * the password and the confirm password are the same.
     * */
    ngOnInit(): void {
        this.signupForm = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });

        this.signupForm.valueChanges
            .subscribe(data => {
                this.passwordsEqual = data.password !== '' && data.password === data.confirmPassword;
            });
    }

    /**
     * Creates the user account in the Firebase and then
     * saves a user object in the Firebase DB in the '/users' entity.
     * If catches error, displays message for the user and resets the form.
     * */
    public onSignup(): void {
        this.successInfo = null;
        this.errorInfo = null;
        this.authService.signupUser(this.signupForm.value)
            .then(response => {
                return new Promise((resolve) => {
                    this.errorInfo = null;
                    this.tempSuccessInfo = response.auth;
                    resolve(this.authService.saveNewUserInDatabase({
                        uid: response.auth.uid,
                        email: response.auth.email
                    }));
                })
            })
            .then(() => {
                this.successInfo = this.tempSuccessInfo;
                setTimeout(() => {
                    this.router.navigate(['/map'])
                }, 1500);
            })
            .catch(error => {
                this.errorInfo = error;
                this.signupForm.reset({email: this.signupForm.value.email});
            });
    }

    /**
     * Validates an email address provided by the user.
     * If an email is correct, returns undefined,
     * otherwise returns an object with 'noEmail' property and value 'true'.
     * @param {FormControl} control Object containing all information about the email input.
     * @returns {undefined | object}
     * */
    private isEmail(control: FormControl): {[s: string]: boolean} {
        if (!control.value.match(/^\w+@.+?\.[a-zA-Z]{2,3}$/)) {
            return {noEmail: true};
        }
    }

    /**
     * Clears error messages box.
     * */
    private clearErrorBox(): void {
        this.errorInfo = null;
    }
}
