import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {TopnavbarComponent} from "./topnavbar.component";

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [TopnavbarComponent],
  exports: [TopnavbarComponent]
})
export class TopnavbarModule {
}
