import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { ChatLayoutComponent } from "./container/chat-layout/chat-layout.component";
import { ChatRoomRouting } from "./chat-room.routing";
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule
} from "@angular/material";
import { ChatContactListComponent } from "./components/chat-contact-list/chat-contact-list.component";
import { ChatAreaComponent } from "./components/chat-area/chat-area.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    Ng2SearchPipeModule,
    ChatRoomRouting,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [
    ChatLayoutComponent,
    ChatContactListComponent,
    ChatAreaComponent
  ]
})
export class ChatRoomModule {}
