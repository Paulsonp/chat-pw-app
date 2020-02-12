import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat-layout",
  templateUrl: "./chat-layout.component.html",
  styleUrls: ["./chat-layout.component.scss"]
})
export class ChatLayoutComponent implements OnInit {
  selectedContact: any;
  view: any;
  toggle = false;

  constructor() {}

  ngOnInit() {}
  selectedContactDetails(contact) {
    this.selectedContact = contact;
    console.log("dfghj", this.selectedContact);
  }
}
