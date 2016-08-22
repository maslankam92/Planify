import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup";
import { routing } from "./app.routing";
import { SigninComponent } from "./signin";
import { HomepageComponent } from "./homepage";

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
        HomepageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
