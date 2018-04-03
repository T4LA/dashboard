import { Component } from '@angular/core';


@Component({
  selector: 'default',
  template: require('./courses.component.html')

})
export class CoursesComponent {

  dataCollection : any;

  title:string= "";

  constructor() {
      this.title = "constructor opgeroepen";
  }

  doIets() {
    this.title = "ik heb iets gedaan";
  }


}
