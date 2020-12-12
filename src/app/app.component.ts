import { HttpClient } from "@angular/common/http";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  fileToUpload: any;
  imageUrl: any = "";
  isUploaded: boolean = false;
  removeUpload: boolean;
  userList: any;
  constructor(private cd: ChangeDetectorRef, private http: HttpClient) {}
  @ViewChild("Image") el: ElementRef;

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
  sortUserList() {
    this.userList.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  handleFileInput(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.isUploaded = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }
}
