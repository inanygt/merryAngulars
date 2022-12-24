import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenComponent } from './open/open.component';
import { DoneComponent } from './done/done.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, OpenComponent, DoneComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
