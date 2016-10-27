import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSemanticModule } from "ng-semantic/ng-semantic";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup";
import { routing } from "./app.routing";
import { SigninComponent } from "./signin";
import { HomepageComponent } from "./homepage";
import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./shared/auth.guard";
import { MainMapComponent } from "./main-map/main-map.component";
import { NavbarComponent } from "./main-map/navbar";
import { MapContainerComponent } from "./main-map/map-container";
import { DetailsContainerComponent } from "./main-map/details-container";
import { GoogleMapService } from "./shared/google-map.service";
import { AngularFireModule, AngularFire } from "angularfire2";
import { PlanifyFirebase } from "./shared/planify-firebase.service";

export const firebaseConfig = {
    apiKey: "AIzaSyDW3v0ddX2xSeHm-Zg3mWFqFzm8teUQlZ8",
    authDomain: "planifly.firebaseapp.com",
    databaseURL: "https://planifly.firebaseio.com",
    storageBucket: "",
};

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgSemanticModule,
        routing,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        AppComponent,
        SignupComponent,
        SigninComponent,
        HomepageComponent,
        MainMapComponent,
        NavbarComponent,
        MapContainerComponent,
        DetailsContainerComponent,
    ],
    providers: [
        AuthService,
        AuthGuard,
        GoogleMapService,
        AngularFire,
        PlanifyFirebase
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
