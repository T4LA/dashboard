import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CoursesPageComponent} from './course.page.component';
import {CoursesIntroComponent} from './course.section.intro.component';
import {CoursesColumnsComponent} from './course.section.columns.component';
import {CoursesComponent} from './courses.component'
// import { RouterModule, Routes } from '@angular/router';

import {CourseRouterModule} from './course.router.module'


const COMPONENTS = [
    CoursesPageComponent,
    CoursesIntroComponent,
    CoursesComponent
];//


@NgModule({
    imports: [CourseRouterModule,CommonModule],
    
    declarations: [
        CoursesComponent,
        CoursesPageComponent,
        CoursesIntroComponent,
        CoursesColumnsComponent],
    providers: [
        
        ],
  })
  export class CourseModule {}