import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutContainerComponent } from "./layout-container/layout-container.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "chat-room" },
  {
    path: "",
    component: LayoutContainerComponent,
    children: [
      {
        path: "chat-room",
        loadChildren: () => import("./modules/chat-room/chat-room.module").then(mod => mod.ChatRoomModule)
      },
      {
        path: "media-room",
        loadChildren: () => import("./modules/media-room/media-room.module").then(mod => mod.MediaRoomModule)
      }
    ]
  },
  { path: "**", redirectTo: "chat-room" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
