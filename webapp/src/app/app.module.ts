import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClimaComponent } from './clima/clima.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {ClimaService} from "./services/clima.service";

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ClimaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
