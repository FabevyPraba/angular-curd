import { Component, OnInit } from '@angular/core';
import { EventListComponent } from '../event-list/event-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from "../event.service";
import { Event } from "../event";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id: number;
  event: Event;

  constructor(private route: ActivatedRoute,private router: Router,
    private eventService: EventService) { }

  ngOnInit() {
    this.event = new Event();

    this.id = this.route.snapshot.params['id'];
    
    this.eventService.getEvent(this.id)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error));
  }

  eventList(){
    this.router.navigate(['event-list']);
  }


}
