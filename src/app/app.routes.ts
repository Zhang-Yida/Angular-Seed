/**
 * Created by meng.zhang02 on 3/14/2017.
 */
import {Routes} from "@angular/router";
import {BasicComponent} from "./components/common/basic/basic.component";

export const ROUTES: Routes = [
  {path: '', redirectTo: 'mainView', pathMatch: 'full'},
  {path: '', component: BasicComponent},

];
