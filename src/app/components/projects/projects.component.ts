import { Component, Input, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from './hello-slide.animation'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class ProjectsComponent implements OnInit {
  @Input() name: string;
  mahindra  = [
    '../../../assets/projectPhotos/Mahindra1.JPG',
    '../../../assets/projectPhotos/Mahindra2.jpg',
    '../../../assets/projectPhotos/Mahindra3.JPG',
    // '../../../assets/projectPhotos/Bedmutha 4.jpg'
  ];
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 2000,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 3000 },
    animation: 'lazy'
  };
  tempData: any[];
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // this.tempData = [];
    // this.carouselTileItems$ = interval(500).pipe(
    //   startWith(-1),
    //   take(this.imgags.length),
    //   map(val => {
    //     const data = (this.tempData = [
    //       ...this.tempData,
    //       // this.imgags[this.imgags.length]
    //       this.imgags[Math.floor(Math.random() * this.imgags.length)]
    //     ]);
    //     return data;
    //   })
    // );
  }
}
