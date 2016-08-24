import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../shared/auth.service";

@Component({
    moduleId: module.id,
    selector: 'pf-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {

    signinForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit():any {
        this.signinForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    onSignin() {
        this.authService.signinUser(this.signinForm.value);
    }

}
