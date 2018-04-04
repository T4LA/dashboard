import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { data } from './mock/course.template.mock';
@Injectable()
export class CourseTemplateService {

    constructor() {
    }
    
    dataCollectionConsent: Observable<any> = Observable.of(data).map((res:any)=>{
        //this block gets executed each time a subscriber connects
        return res;
    });
    
    
    getCourseTemplate() {
        return this.dataCollectionConsent;
    }
}
