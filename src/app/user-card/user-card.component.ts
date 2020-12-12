import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  userList: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .subscribe(data => {
        this.userList = data;
        console.log(data);
      });
  }
}
