import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {BasicComponent} from "../basic/basic.component";
import {NavigationModule} from "../navigation/navigation.module";
import {TopnavbarModule} from "../topnavbar/topnavbar.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule, NavigationModule, TopnavbarModule, FooterModule
  ],
  declarations: [BasicComponent],
  exports: [BasicComponent]
})
export class LayoutsModule {
}
