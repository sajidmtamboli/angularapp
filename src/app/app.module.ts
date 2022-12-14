import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningSuccefullComponent } from './warning-succefull/warning-succefull.component';

import { ServersComponent } from './servers/servers.component';
import { DataBandingAssigmentComponent } from './data-banding-assigment/data-banding-assigment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DemoComponent } from './demo/demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OutputComponent } from './output/output.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksAssigmentComponent } from './hooks-assigment/hooks-assigment.component';
import { DirecAssigmentComponent } from './direc-assigment/direc-assigment.component';
import { OnChangeParentComponent } from './on-change-parent/on-change-parent.component';
import { OnChangeChildComponent } from './on-change-child/on-change-child.component';
import { LifeCycleHookChildComponent } from './life-cycle-hook-child/life-cycle-hook-child.component';
import { LifeCycleHookParentComponent } from './life-cycle-hook-parent/life-cycle-hook-parent.component';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';
import { LifeCycleParentComponent } from './life-cycle-parent/life-cycle-parent.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { SimpleformAssigComponent } from './simpleform-assig/simpleform-assig.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
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
    HooksComponent,
    HooksAssigmentComponent,
    DirecAssigmentComponent,
    OnChangeParentComponent, 
    OnChangeChildComponent,
    LifeCycleHookChildComponent,
    LifeCycleHookParentComponent,
    LifeCycleChildComponent,
    LifeCycleParentComponent,
    SimpleformComponent,
    SimpleformAssigComponent,
    ReactiveformComponent,
   ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
