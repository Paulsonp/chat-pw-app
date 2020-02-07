import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MediaLayoutComponent } from "./container/media-layout/media-layout.component";

const routes: Routes = [{ path: "", component: MediaLayoutComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoomRouting {}
