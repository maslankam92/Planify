import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../shared/auth.service";

@Component({
    selector: 'pf-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.scss']
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;
    successInfo: any;
    errorInfo: any;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    /**
     * Creates a signin form.
     * */
    ngOnInit(): any {
        this.signinForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    /**
     * Logs the user in.
     * If catches error, displays message for the user and resets the form.
     * @returns {void}
     * */
    onSignin(): void {
        this.authService.signinUser(this.signinForm.value)
            .then(response => {
                this.errorInfo = null;
                this.successInfo = response.auth;
                setTimeout(() => {
                    this.router.navigate(['/map'])
                }, 2000);
            })
            .catch(error => {
                this.errorInfo = error;
                this.signinForm.reset({email: this.signinForm.value.email});
            })
    }

    /**
     * Clears error messages box.
     * */
    private clearErrorBox(): void {
        this.errorInfo = null;
    }
}
