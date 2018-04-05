import { Component } from '@angular/core';
import { MockCourseService } from '../services/mock/course.service';

@Component({
    selector: 'privacy-dashboard',
    template: require('./privacy-dashboard.component.html'),
    styleUrls: ['./privacy-dashboard.component.css']
})

export class PrivacyDashboardComponent {
    courseData: any;

    constructor(private courseService: MockCourseService) {
        this.courseData = courseService.getCourseSettings();
    }
}