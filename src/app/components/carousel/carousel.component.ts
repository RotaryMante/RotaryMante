import { Component, Input, OnInit } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CarouselImage } from 'src/app/shared/interfaces/CarouselImage';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() imagesArray: Array<CarouselImage> = [];
  @Input() slideInterval: number = 5000;
  @Input() carouselInfo: boolean = true;
  @Input() carouselDots: boolean = true;
  @Input() carouselControls: boolean = true;
  @Input() objectFitCover: boolean = true;
  @Input() componentHeight: string = '100';

  public selectedIndex: number = 0;
  private autoSlideInterval: any;

  public faArrowCircleRight = faArrowCircleRight;
  public faArrowCircleLeft = faArrowCircleLeft;
  public faCircleXMark = faCircleXmark;

  ngOnInit(): void {
    console.log(this.imagesArray);
    this.autoSlideImages();
  }

  private autoSlideImages(): void {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  public selectImage(imgIndex: number): void {
    this.selectedIndex = imgIndex;
  }

  public onNextClick(): void {
    if (this.selectedIndex === this.imagesArray.length - 1)
      this.selectedIndex = 0;
    else this.selectedIndex = this.selectedIndex + 1;
  }

  public onPreviousClick(): void {
    if (this.selectedIndex === 0)
      this.selectedIndex = this.imagesArray.length - 1;
    else this.selectedIndex = this.selectedIndex - 1;
  }
}
