import { Component, Input } from '@angular/core';
import { CourseTemplateService } from './../services/template.service';


@Component({
  selector: 'course-intro',
  template: require('./course.section.intro.component.html')

})
export class CoursesIntroComponent {

  @Input() data : any;

  constructor() {
    

  }


}
