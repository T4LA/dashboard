import { Component, OnInit } from "@angular/core";
import { MockEventService } from "../services/mock/event.service";

@Component({
  selector: "event-timeline",
  template: require("./event-timeline.component.html"),
  styleUrls: ["./event-timeline.component.css"]
})
export class EventTimelineComponent {
  events: any;

  constructor(private eventService: MockEventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }
}
