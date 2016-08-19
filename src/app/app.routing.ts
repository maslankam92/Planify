import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./signup/signup.component";
import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
import { HomepageComponent } from "./homepage/homepage.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'home', component: HomepageComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);