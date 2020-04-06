import { EventDetailsComponent } from './../event-details/event-details.component';
import { Observable } from "rxjs";
import { EventService } from "../event.service";
import { Event } from "../event";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Observable<Event[]>;

  constructor(private eventService: EventService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.events = this.eventService.getEventList();
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  eventDetails(id: number){
    this.router.navigate(['event-details', id]);
  }

  updateEvent(id: number){
    this.router.navigate(['event-update', id]);
  }

}
