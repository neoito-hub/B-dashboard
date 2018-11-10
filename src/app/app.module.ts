import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './container/layout/layout.module';
import { EFormModule } from './e-form/e-form.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './component/kickoff/clients/client.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    EFormModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
