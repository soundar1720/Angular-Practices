import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent, HiiComponent } from './hello.component';
import { HostDirective } from './host.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,HiiComponent, HostDirective ],
  bootstrap:    [ AppComponent ],
  entryComponents: [HelloComponent,HiiComponent]
})
export class AppModule { }
