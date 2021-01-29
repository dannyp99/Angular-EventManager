import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from './event-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'EventManagerAngular';
  events: CalendarEvent[] = [];
  
  ngOnInit(): void {
    
  }
}
