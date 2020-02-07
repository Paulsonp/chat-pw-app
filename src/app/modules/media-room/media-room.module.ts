import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";

import { MediaLayoutComponent } from "./container/media-layout/media-layout.component";
import { MediaRoomRouting } from "./media-room.routing";
import { MediaListComponent } from "./components/media-list/media-list.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MediaRoomRouting
  ],
  declarations: [MediaLayoutComponent, MediaListComponent]
})
export class MediaRoomModule {}
