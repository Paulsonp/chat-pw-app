import { Component, OnInit } from "@angular/core";
import { ApiService, Item } from "src/app/shared/services/api.service";

@Component({
  selector: "app-chat-contact-list",
  templateUrl: "./chat-contact-list.component.html",
  styleUrls: ["./chat-contact-list.component.scss"]
})
export class ChatContactListComponent implements OnInit {
  items: any[] = [];
  public searchName: any = "";
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.apiService.fetch().subscribe(
      (data: Array<Item>) => {
        console.log(data);
        this.items = data;
        console.log("data", this.items);
      },
      err => {
        console.log(err);
      }
    );
  }
}
