import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDataComponent,
    CancelBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
