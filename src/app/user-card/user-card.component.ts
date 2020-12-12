import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  userList: any;
  selectedUser: any = [];
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
  selectUser(user) {
    console.log("User Card Clicked", user);
    if (this.selectedUser.includes(user)) {
      let temp = this.selectedUser.filter(id => {
        return id != user;
      });
      document.getElementById(user).setAttribute("class", "d-none");
      this.selectUser = temp;
    } else {
      document.getElementById(user).setAttribute("class", "selectedUser");
      this.selectedUser.push(user);
    }
  }
}
