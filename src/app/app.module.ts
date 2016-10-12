import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms';
import { NgSemanticModule } from "ng-semantic/ng-semantic";
// import { GOOGLE_MAPS_PROVIDERS } from "angular2-google-maps/core/index";
// import { GOOGLE_MAPS_DIRECTIVES } from "angular2-google-maps/core/directives-const";

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
// import { provideLazyMapsAPILoaderConfig } from "angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader";
import { GoogleMapService } from "./shared/google-map.service";
import {AngularFireModule, AngularFire} from "angularfire2";


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
        // GOOGLE_MAPS_DIRECTIVES
    ],
    providers: [
        AuthService,
        AuthGuard,
        GoogleMapService,
        AngularFire
        // GOOGLE_MAPS_PROVIDERS,
        // provideLazyMapsAPILoaderConfig({apiKey: 'AIzaSyDW3v0ddX2xSeHm-Zg3mWFqFzm8teUQlZ8', libraries: ['places']})
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
