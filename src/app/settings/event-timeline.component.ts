import { Component, OnInit } from "@angular/core";
import { MockEventService } from "../services/mock/event.service";

@Component({
  selector: "event-timeline",
  template: require("./event-timeline.component.html"),
  styleUrls: ["./event-timeline.component.css"]
})
export class EventTimelineComponent {
  events: any[];

  constructor(private eventService: MockEventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
      console.log("Event are: ", data);
      this.events.sort(function(e1, e2) {
        let d1 = new Date(e1.timestamp).getTime();
        let d2 = new Date(e2.timestamp).getTime();
        return d1 - d2;
      });
    });
  }

  getTimestamp(event:any){
    return "12:23";
  }
}
