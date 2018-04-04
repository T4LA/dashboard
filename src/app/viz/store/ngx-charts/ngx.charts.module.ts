import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartVizComponent } from './barchart.viz.component';
import { VizService } from './../../visualisation.service';
import {VisualisationDynamicComponent} from './../../visualisation.dynamic.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    imports: [CommonModule,    NgxChartsModule,
    ],

    declarations: [
        BarChartVizComponent
    ],
    entryComponents: [
        BarChartVizComponent
    ]
})
export class NgxChartsVizModule {
    constructor(private service:VizService){
        this.service.addService('ngx-barchart', new VisualisationDynamicComponent(BarChartVizComponent));
    };
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgxChartsVizModule,
        };
    }
}