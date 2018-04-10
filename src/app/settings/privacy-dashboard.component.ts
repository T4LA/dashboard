import { Component, OnInit } from '@angular/core';
import { MockCourseService } from '../services/mock/course.service';

@Component({
    selector: 'privacy-dashboard',
    template: require('./privacy-dashboard.component.html'),
    styleUrls: ['./privacy-dashboard.component.css']
})

export class PrivacyDashboardComponent {
    courseData: any;
    selectedDataItem: any;
    selectedRow: Number;
    selectedCourse: Number;

    constructor(private courseService: MockCourseService) {
        //this.courseData = courseService.getCourseSettings();
    }

    ngOnInit() {
        this.courseService.getCourseSettings().subscribe(data => {
            console.log("course data", data);
            this.courseData = data;
        });
    }

    highlightClickedRow = function (courseIndex: any, rowIndex: any) {
        this.selectedRow = rowIndex;
        this.selectedCourse = courseIndex;

        console.log("course data: ", this.courseData);

        this.selectedDataItem = this.courseData[this.selectedCourse]["data"][this.selectedRow];

        console.log("Clicked row: ", this.selectedDataItem);
    }
}