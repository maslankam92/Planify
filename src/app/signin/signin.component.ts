import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../shared/auth.service";

@Component({
    moduleId: module.id,
    selector: 'pf-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {

    signinForm: FormGroup;
    success: any;
    error: any;

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

    ngOnInit():any {
        this.signinForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    onSignin():Promise<any> {
        return this.authService.signinUser(this.signinForm.value)
            .then(
                data => {
                    this.error = null;
                    this.success = data;
                    setTimeout(() => { this.router.navigate(['/map']) }, 3000);
                },
                error => this.error = error
        )
    }

}
