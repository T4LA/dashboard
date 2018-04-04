import { Component, Input } from '@angular/core';


@Component({
  selector: 'course-columns',
  template: require('./course.section.columns.component.html')

})
export class CoursesColumnsComponent {

  @Input() data : any;

  constructor() {
    

  }


}
