import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export interface Item {
  name: string;
  description: string;
  url: string;
  html: string;
  markdown: string;
}
export interface ContactItem {
  id: number;
  f_name: string;
  l_name: string;
  email: string;
  avatar: string;
}
@Injectable({
  providedIn: "root"
})
export class ApiService {
  private baseURL: string = "https://www.techiediaries.com/api/data.json";
  constructor(private httpClient: HttpClient) {}
  fetch(): Observable<Item[]> {
    return <Observable<Item[]>>this.httpClient.get(this.baseURL);
  }
  contactList() {
    return this.httpClient.get(
      "https://gorest.co.in/public-api/users?_format=json&access-token=ggH9Bi1prtymQS4mGVBCrAPetzve0WCpeYlw"
    );
  }
}
