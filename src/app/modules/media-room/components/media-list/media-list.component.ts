import { Component, OnInit } from "@angular/core";
import { Item, ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-media-list",
  templateUrl: "./media-list.component.html",
  styleUrls: ["./media-list.component.scss"]
})
export class MediaListComponent implements OnInit {
  title = "firstpwa";
  items: Array<Item>;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.apiService.fetch().subscribe(
      (data: Array<Item>) => {
        console.log(data);
        this.items = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
