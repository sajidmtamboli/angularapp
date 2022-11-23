import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningSuccefullComponent } from './warning-succefull/warning-succefull.component';
import { PractisComponent } from './practis/practis.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningSuccefullComponent,
    PractisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
