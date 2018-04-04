import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CoursesComponent} from './courses.component'
import {CoursesPageComponent} from './course.page.component'

const routes: Routes = [
  { path: '',  component: CoursesComponent },
  { path: 'page',  component: CoursesPageComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CourseRouterModule {}