import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { data } from './mock_course_data';
@Injectable()
export class MockCourseService {

    constructor() {
    }

    courseSettings: Observable<any> = Observable.of(data).map((res:any)=>{
        //this block gets executed each time a subscriber connects
        return res;
    });

    getCourseSettings() {
        return this.courseSettings;
    }
}
