import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';



import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


// import {MatCheckboxModule} from '@angular/material';
// import {MatGridListModule} from '@angular/material/grid-list';

// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatListModule} from '@angular/material/list';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatCardModule} from '@angular/material/card';
// import {MatDividerModule} from '@angular/material/divider';
const BASE_MODULES = [CommonModule,
    MatButtonModule, MatCheckboxModule,
    MatGridListModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatMenuModule,MatListModule,
    MatExpansionModule,MatCardModule,MatDividerModule,];
import {MediaMatcher} from '@angular/cdk/layout';
import {
    HeaderComponent, SidebarComponent
  } from './components';


const COMPONENTS = [
    HeaderComponent,
    SidebarComponent
];//


@NgModule({
    imports: [...BASE_MODULES, RouterModule],
    exports:[...COMPONENTS],
    declarations: [...COMPONENTS],
    providers: [
        
        MediaMatcher
        
        ],
  })
  export class ThemeModule {
    static forRoot(): ModuleWithProviders {
      return <ModuleWithProviders>{
        ngModule: ThemeModule,
      };
    }
  }