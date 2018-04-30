import { Component, OnInit } from "@angular/core";
import { MockCourseService } from "../services/mock/course.service";

@Component({
  selector: "privacy-dashboard",
  template: require("./privacy-dashboard.component.html"),
  styleUrls: ["./privacy-dashboard.component.css"]
})
export class PrivacyDashboardComponent {
  courseData: any;
  selectedDataItem: any;
  selectedRow: number;
  selectedCourseIndex: number;

  constructor(private courseService: MockCourseService) {
    //this.courseData = courseService.getCourseSettings();
  }

  ngOnInit() {
    this.courseService.getCourseSettings().subscribe(data => {
      console.log("course data", data);
      this.courseData = data;
    });
  }

  getWidgetsForSelected() {
    let widgetsForData = [];
    for (let w of this.courseData[this.selectedCourseIndex].widgets) {
      for (let d of w.data) {
        if (d === this.selectedDataItem.name) {
          if (widgetsForData.findIndex(x => x.name === w.name) === -1) {
            widgetsForData.push(w);
          }
        }
      }
    }
    console.log("Widgets for data: ", widgetsForData);
    return widgetsForData;
  }

  highlightClickedRow = function(courseIndex: any, rowIndex: any) {
    this.selectedRow = rowIndex;
    this.selectedCourseIndex = courseIndex;

    console.log("course data: ", this.courseData);

    this.selectedDataItem = this.courseData[this.selectedCourseIndex]["data"][
      this.selectedRow
    ];

    console.log("Clicked row: ", this.selectedDataItem);
  };
}
