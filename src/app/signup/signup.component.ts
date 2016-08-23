import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from "../shared/auth.service";

@Component({
    moduleId: module.id,
    selector: 'pf-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    passwordsEqual: boolean = false;

    constructor(private fb: FormBuilder, private authService: AuthService) { }

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

    onSignup() {
        this.authService.signupUser(this.signupForm.value);
    }

    isEmail(control: FormControl): {[s: string]: boolean} {
        if (!control.value.match(/^\w+@.+?\.[a-zA-Z]{2,3}$/)) {
            return {noEmail: true};
        }
    }
}
