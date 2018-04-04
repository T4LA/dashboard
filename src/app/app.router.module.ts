import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsentComponent } from './settings/consent.component';
import { WidgetConfiguratorComponent } from './settings/widget.configurator.component'
import { CourseModule } from './courses/course.module';

const routes: Routes = [
    { path: '', redirectTo: 'course', pathMatch: 'full' },
    { path: 'data', component: ConsentComponent },
    { path: 'functionality', component: ConsentComponent },
    { path: 'widget', component: WidgetConfiguratorComponent },
    { path: 'consent', component: ConsentComponent },
    { path: 'course', loadChildren: './courses/course.module#CourseModule' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }