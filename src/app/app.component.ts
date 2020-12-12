import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  fileToUpload: any;
  imageUrl: any = '';
  isUploaded: boolean = false;
  removeUpload: boolean;
  constructor(private cd: ChangeDetectorRef) {}
  @ViewChild("Image") el: ElementRef;

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
