import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Events } from "./mock_events";

@Injectable()
export class MockEventService {
  events: Observable<any> = Observable.of(Events).map((res: any) => {
    return res;
  });

  getEvents() {
    return this.events;
  }

  constructor() {}
}
