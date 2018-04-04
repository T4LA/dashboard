import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CoursesPageComponent} from './course.page.component';
import {CoursesIntroComponent} from './course.section.intro.component';
import {CoursesColumnsComponent} from './course.section.columns.component';
import {CoursesComponent} from './courses.component'

import {CourseRouterModule} from './course.router.module'
import {VizModule} from '../viz/viz.module';

@NgModule({
    imports: [CourseRouterModule,CommonModule,VizModule],
    
    declarations: [
        CoursesComponent,
        CoursesPageComponent,
        CoursesIntroComponent,
        CoursesColumnsComponent],
    providers: [
        
        ],
  })
  export class CourseModule {}