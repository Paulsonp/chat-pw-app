import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ChatLayoutComponent } from "./container/chat-layout/chat-layout.component";
import { ChatRoomRouting } from "./chat-room.routing";
import { MatInputModule, MatIconModule, MatButtonModule, MatMenuModule } from "@angular/material";
import { ChatContactListComponent } from "./components/chat-contact-list/chat-contact-list.component";

@NgModule({
  imports: [CommonModule, FlexLayoutModule, ChatRoomRouting, MatInputModule, MatIconModule, MatButtonModule, MatMenuModule],
  declarations: [ChatLayoutComponent, ChatContactListComponent]
})
export class ChatRoomModule {}
