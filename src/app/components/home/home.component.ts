import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})

export class HomeComponent implements OnInit {
  _object = Object;
  Carousel: any = {};

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.Carousel = {
      Carousel1: ['../../../assets/clientLogos/A1.png', '../../../assets/clientLogos/A2.png', '../../../assets/clientLogos/A3.jpg', '../../../assets/clientLogos/A4.jpg'],
      Carousel2: [],
      Carousel3: [],
      Carousel4: []
    };
  }
}
