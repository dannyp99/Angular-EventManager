import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventViewComponent } from './event-view.component';

@NgModule({
  declarations: [ EventViewComponent ],
  exports: [ EventViewComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomModule {}
