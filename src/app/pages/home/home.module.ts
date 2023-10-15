import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
