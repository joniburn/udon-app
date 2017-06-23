import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UdonItemComponent } from './udon-item/udon-item.component';
import { UdonService } from './udon.service';
import { EnglishUdonService } from './english-udon.service';

@NgModule({
  declarations: [
    AppComponent,
    UdonItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: UdonService, useClass: EnglishUdonService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
