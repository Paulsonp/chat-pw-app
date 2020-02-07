import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatLayoutComponent } from "./container/chat-layout/chat-layout.component";
import { ChatRoomRouting } from "./chat-room.routing";

@NgModule({
  imports: [CommonModule, ChatRoomRouting],
  declarations: [ChatLayoutComponent]
})
export class ChatRoomModule {}
