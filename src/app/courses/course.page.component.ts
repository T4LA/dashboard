import { Component } from '@angular/core';
import { CourseTemplateService } from './../services/template.service';


@Component({
  selector: 'default',
  template: require('./course.page.component.html')

})
export class CoursesPageComponent {

  template : any;

  constructor(private templateService: CourseTemplateService) {
    this.template = templateService.getCourseTemplate();

  }


}
