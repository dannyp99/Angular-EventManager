import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListComponent } from './event-list.component';

@NgModule({
  declarations: [ EventListComponent ],
  exports: [ EventListComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EventListModule {}
