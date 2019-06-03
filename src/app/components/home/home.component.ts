import { Component, Input, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Observable, interval } from 'rxjs';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class HomeComponent implements OnInit {
  _object = Object;
  clientlog: any = [];

  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 3, md: 6, lg: 8, all: 0 },
    speed: 2000,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 4000 },
    animation: 'lazy'
  };
  tempData: any[];
  proData: any = [];
  proTitle: any;

  constructor(private modalService: NgbModal) {
    // config.interval = 4000;
    // config.wrap = true;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

  ngOnInit() {
    this.clientlog = [
      '../../../assets/clientLogos/A1.png',
      '../../../assets/clientLogos/A2.png',
      '../../../assets/clientLogos/A3.JPG',
      '../../../assets/clientLogos/A4.jpg',
      '../../../assets/clientLogos/B1.jpg',
      '../../../assets/clientLogos/B2.jpg',
      '../../../assets/clientLogos/B3.jpg',
      '../../../assets/clientLogos/B4.jpg',
      '../../../assets/clientLogos/C1.jpg',
      '../../../assets/clientLogos/C2.jpg',
      '../../../assets/clientLogos/C3.jpg',
      '../../../assets/clientLogos/C4.png',
      '../../../assets/clientLogos/D1.jpg',
      '../../../assets/clientLogos/D2.jpg',
      '../../../assets/clientLogos/D3.jpg',
      '../../../assets/clientLogos/D4.jpg',
      '../../../assets/clientLogos/E1.jpg',
      '../../../assets/clientLogos/E2.jpg',
      '../../../assets/clientLogos/E3.jpg',
      '../../../assets/clientLogos/E4.jpg',
      '../../../assets/clientLogos/F1.jpg',
      '../../../assets/clientLogos/F2.jpg',
      '../../../assets/clientLogos/F3.jpg',
      '../../../assets/clientLogos/F4.jpg',
      '../../../assets/clientLogos/G1.png',
      '../../../assets/clientLogos/G2.jpg',
      '../../../assets/clientLogos/G3.png',
      '../../../assets/clientLogos/G4.png',
      '../../../assets/clientLogos/H1.png',
      '../../../assets/clientLogos/H2.jpg',
      '../../../assets/clientLogos/H3.jpg',
      '../../../assets/clientLogos/H4.jpg',
      '../../../assets/clientLogos/J1.jpg',
      '../../../assets/clientLogos/J2.jpg',
      '../../../assets/clientLogos/J3.jpg',
      '../../../assets/clientLogos/J4.jpg',
      '../../../assets/clientLogos/K1.jpg',
      '../../../assets/clientLogos/K2.jpg',
      '../../../assets/clientLogos/K3.jpg',
      '../../../assets/clientLogos/K4.png',
      '../../../assets/clientLogos/L1.jpg',
      '../../../assets/clientLogos/L2.jpg',
      '../../../assets/clientLogos/L3.jpg',
      '../../../assets/clientLogos/L4.jpg',
      '../../../assets/clientLogos/M1.jpg',
      '../../../assets/clientLogos/M2.jpg',
      '../../../assets/clientLogos/M3.jpg',
      '../../../assets/clientLogos/M4.jpg',
      '../../../assets/clientLogos/N1.jpg',
      '../../../assets/clientLogos/N2.jpg',
    ]

    // this.Carousel = {
    //   Carousel1: ['../../../assets/clientLogos/A1.png', '../../../assets/clientLogos/A2.png', '../../../assets/clientLogos/A3.jpg', '../../../assets/clientLogos/A4.jpg'],
    //   Carousel2: [],
    //   Carousel3: [],
    //   Carousel4: []
    // };
  }
}
