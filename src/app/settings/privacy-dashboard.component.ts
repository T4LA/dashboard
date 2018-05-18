import { Component, OnInit } from "@angular/core";
import { MockCourseService } from "../services/mock/course.service";
import { Router } from "@angular/router";
import { MatSelectChange } from "@angular/material";

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
  selectedCourse: any = null;

  constructor(
    private courseService: MockCourseService,
    private router: Router
  ) {
    //this.courseData = courseService.getCourseSettings();
  }

  ngOnInit() {
    this.courseService.getCourseSettings().subscribe(data => {
      console.log("course data", data);
      this.courseData = data;
      this.selectedCourse = data[0];
      console.log("Selected Course: ", this.selectedCourse);
    });
  }

  timelineClick() {
    this.router.navigateByUrl("/settings/privacy/timeline");
  }

  onCourseSelectionChange(newValue: MatSelectChange) {
    this.selectedCourse = newValue.value;
  }

  getWidgetsForSelected() {
    let widgetsForData = [];
    for (let w of this.selectedCourse.widgets) {
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

    this.selectedDataItem = this.selectedCourse.data[this.selectedRow];

    console.log("Clicked row: ", this.selectedDataItem);
  };
}
