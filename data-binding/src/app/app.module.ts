import { TwoWayBindingModule } from './two-way-binding/two-way-binding.module';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, InputPropertyComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TwoWayBindingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
