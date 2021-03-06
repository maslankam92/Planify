import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { MainMapComponent } from "./main-map/main-map.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { AuthGuard } from "./shared/auth.guard";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'home', component: HomepageComponent},
    {path: 'map', component: MainMapComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);