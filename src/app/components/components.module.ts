import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class ComponentsModule {}
