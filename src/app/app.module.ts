import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { SharedService } from './shared.service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, UserCardComponent],
  bootstrap: [AppComponent],
  providers: [SharedService]
})
export class AppModule {}
