import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {NavigationComponent} from "./navigation.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule, RouterModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
