import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

declare var firebase: any;

@Component({
    selector: 'pf-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    passwordsEqual: boolean = false;

    constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) { }

    ngOnInit():any {
        this.signupForm = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });

        this.signupForm.valueChanges
            .subscribe(data => this.passwordsEqual = data.password !== '' && data.password === data.confirmPassword);
    }

    onSignup(): void {
        this.authService.signupUser(this.signupForm.value)
            .then(response => {
                var userObject = {
                    uid: response.uid,
                    email: response.email
                };
                this.authService.saveNewUser(userObject)
                    .then(setTimeout(() => { this.router.navigate(['/map']) }, 1500))
            })
            .catch(err => console.log(err));
    }

    isEmail(control: FormControl): {[s: string]: boolean} {
        if (!control.value.match(/^\w+@.+?\.[a-zA-Z]{2,3}$/)) {
            return {noEmail: true};
        }
    }
}
