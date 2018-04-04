import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericVisualisationComponent,VizDirective } from './generic.visualisation.component';
import { ArrayVizComponent } from './store/array.viz.component';

import { VizService } from './visualisation.service';
import {NgxChartsVizModule} from './store/ngx-charts/ngx.charts.module'

@NgModule({
    imports: [
        CommonModule,
        NgxChartsVizModule.forRoot()
    ],

    declarations: [
        GenericVisualisationComponent,
        VizDirective,
        ArrayVizComponent
    ],
    entryComponents: [
        ArrayVizComponent
    ],
    providers: [
        { provide: VizService, useClass: VizService }
    ],

    exports: [
        GenericVisualisationComponent
    ]
})
export class VizModule { }