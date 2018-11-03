import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './container/layout/layout.module';
import { EFormModule } from './container/e-form/e-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, EFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
