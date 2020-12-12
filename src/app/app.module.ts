import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UserCardComponent } from "./user-card/user-card.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HelloComponent, UserCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
