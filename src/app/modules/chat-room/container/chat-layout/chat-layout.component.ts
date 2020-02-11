import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat-layout",
  templateUrl: "./chat-layout.component.html",
  styleUrls: ["./chat-layout.component.scss"]
})
export class ChatLayoutComponent implements OnInit {
  selectedContact: any;
  getContactDeatils: any;
  constructor() {}

  ngOnInit() {}
  selectedContactDetails(contact) {
    console.log(contact);
    this.selectedContact = contact;
  }
}
