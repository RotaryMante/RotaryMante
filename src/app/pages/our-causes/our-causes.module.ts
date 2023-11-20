import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurCausesRoutingModule } from './our-causes-routing.module';
import { OurCausesComponent } from './our-causes.component';


@NgModule({
  declarations: [
    OurCausesComponent
  ],
  imports: [
    CommonModule,
    OurCausesRoutingModule
  ]
})
export class OurCausesModule { }
