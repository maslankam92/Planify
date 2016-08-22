import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'pf-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    passwordsEqual: boolean;
    // error = false;
    // errorMessage = '';

    constructor(private fb: FormBuilder) { }

    ngOnInit():any {
        this.signupForm = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.compose([
                Validators.required,
                this.isEqualPassword.bind(this)
            ])],
            confirmPassword: ['', Validators.compose([
                Validators.required,
                this.isEqualConfirmPassword.bind(this)
            ])],
        });

        this.signupForm.valueChanges.subscribe(data => this.passwordsEqual = data.password === data.confirmPassword);
        console.log(this.passwordsEqual);
    }

    check() {
        console.log(this.signupForm);
    }

    isEmail(control: FormControl): {[s: string]: boolean} {
        if (!control.value.match(/^\w+@.+?\.[a-zA-Z]{2,3}$/)) {
            return {noEmail: true};
        }
    }

    isEqualPassword(control: FormControl): {[s: string]: boolean} {
        if (!this.signupForm) {
            return {passwordsNotMatch: true};
        }

        if (control.value !== this.signupForm.controls['confirmPassword'].value) {
            return {passwordsNotMatch: true};
        }
    }

    isEqualConfirmPassword(control: FormControl): {[s: string]: boolean} {
        if (!this.signupForm) {
            return {passwordsNotMatch: true};
        }

        if (control.value !== this.signupForm.controls['password'].value) {
            return {passwordsNotMatch: true};
        }
    }

}
