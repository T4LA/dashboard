import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'trula-header',
  
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() nav:any;
  @Input() title:string;
  name :string = "stefaan";

  ngOnInit() {
    this.name = "hendrik";
  }

  toggleSidebar(): boolean {
    return false;
  }

  toggleSettings(): boolean {
    return false;
  }

}
