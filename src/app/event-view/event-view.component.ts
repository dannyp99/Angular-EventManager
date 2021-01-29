import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from '../event-interface';

@Component({
  selector: 'event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {
  @Input() event: CalendarEvent;
  constructor() { }

  ngOnInit(): void {
  }

  deleteEvent(): void {
    
  }

}
