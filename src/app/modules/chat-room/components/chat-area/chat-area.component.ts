import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-chat-area",
  templateUrl: "./chat-area.component.html",
  styleUrls: ["./chat-area.component.scss"]
})
export class ChatAreaComponent implements OnInit {
  @Input() selectedContact;
  constructor() {}

  ngOnInit() {}
}
