import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, ViewChild, ViewContainerRef } from '@angular/core';


import '../assets/css/styles.css';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  mobileQuery: MediaQueryList;
  nav: any;
  private _mobileQueryListener: () => void;
  @ViewChild('sidebar') sidebar:any;
  @ViewChild('sidenav2') sidebar1:any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.nav = {
      toggle:()=>{
        this.sidebar.toggle();
       // this.sidebar1.toggle();
      }
    }
  }
}
