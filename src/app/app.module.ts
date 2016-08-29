import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup";
import { routing } from "./app.routing";
import { SigninComponent } from "./signin";
import { HomepageComponent } from "./homepage";
import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./shared/auth.guard";
import { MainMapComponent } from "./main-map/main-map.component";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        SignupComponent,
        SigninComponent,
        HomepageComponent,
        MainMapComponent
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
