import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningSuccefullComponent } from './warning-succefull/warning-succefull.component';

import { ServersComponent } from './servers/servers.component';
import { DataBandingAssigmentComponent } from './data-banding-assigment/data-banding-assigment.component';
import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DemoComponent } from './demo/demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OutputComponent } from './output/output.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningSuccefullComponent,
    ServersComponent,
    DataBandingAssigmentComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    AttriComponent,
    CustdirDirective,
    DemoComponent,
    ParentComponent,
    ChildComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
