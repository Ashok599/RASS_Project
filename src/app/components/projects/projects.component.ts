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

  projects: any;

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
    this.projects = {
      "pro1": {
        "proName": "SEW Eurodrive India Pvt. Ltd.",
        "proLocation": "Chakan MIDC, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/SEW-logo.png",
        "proMainImg": "../../../assets/projectPhotos/SEW1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/SEW1.jpg",
          "../../../assets/projectPhotos/SEW2.jpg",
          "../../../assets/projectPhotos/SEW2.jpg"
        ]
      },
      "pro2": {
        "proName": "Huf India Pvt. Ltd.",
        "proLocation": "Chakan MIDC, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/huf-logo.png",
        "proMainImg": "../../../assets/projectPhotos/HUF1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/HUF1.jpg",
          "../../../assets/projectPhotos/HUF2.jpg",
          "../../../assets/projectPhotos/HUF3.JPG"
        ]
      },
      "pro3": {
        "proName": "Mahindra Gears & Transmission",
        "proLocation": "Chakan MIDC, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/mgt-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Mahindra Gears1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Mahindra Gears1.jpg",
          "../../../assets/projectPhotos/Mahindra Gears2.jpg",
          "../../../assets/projectPhotos/Mahindra Gears3.jpg"
        ]
      },
      "pro4": {
        "proName": "General Motors (Export Shed)",
        "proLocation": "Talegaon, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/gm-logo.png",
        "proMainImg": "../../../assets/projectPhotos/General Motors1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/General Motors1.jpg",
          "../../../assets/projectPhotos/General Motors2.jpg",
          "../../../assets/projectPhotos/General Motors3.jpg"
        ]
      },
      "pro5": {
        "proName": "INA Bearings",
        "proLocation": "Talegaon, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/ina-logo.png",
        "proMainImg": "../../../assets/projectPhotos/INA1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/INA1.jpg",
          "../../../assets/projectPhotos/INA2.jpg",
          "../../../assets/projectPhotos/INA3.jpg"
        ]
      },
      "pro6": {
        "proName": "Mahindra and Mahindra",
        "proLocation": "Uttarakhand",
        "proLogo": "../../../assets/projectLogos/mahindra-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Mahindra1.JPG",
        "proImages": [
          "../../../assets/projectPhotos/Mahindra1.JPG",
          "../../../assets/projectPhotos/Mahindra2.jpg",
          "../../../assets/projectPhotos/Mahindra3.JPG"
        ]
      },
      "pro7": {
        "proName": "Minda Industries",
        "proLocation": "Uttarakhand",
        "proLogo": "../../../assets/projectLogos/minda-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/MINDA 1.JPG",
        "proImages": [
          "../../../assets/projectPhotos/MINDA 1.JPG",
          "../../../assets/projectPhotos/MINDA 2.JPG",
          "../../../assets/projectPhotos/MINDA 3.JPG"
        ]
      },
      "pro8": {
        "proName": "Inox Air Products Ltd.",
        "proLocation": "Vile Bhagad MIDC, Raigad, Maharashtra",
        "proLogo": "../../../assets/projectLogos/inox-airProducts-logo.png",
        "proMainImg": "../../../assets/projectPhotos/INOX 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/INOX 1.jpg",
          "../../../assets/projectPhotos/INOX 2.jpg",
          "../../../assets/projectPhotos/INOX 3.jpg"
        ]
      },
      "pro9": {
        "proName": "Madhusilica Pvt. Ltd.",
        "proLocation": "Bhavnagar, Gujarat",
        "proLogo": "../../../assets/projectLogos/Madhusilica-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Madhusilica 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Madhusilica 1.jpg",
          "../../../assets/projectPhotos/Madhusilica 2.jpg",
          "../../../assets/projectPhotos/Madhusilica 3.jpg"
        ]
      },
      "pro10": {
        "proName": "Emcure Pharmaceuticals",
        "proLocation": "Hinjewadi, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/EmcurePharmaceuticals-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Emcure 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Emcure 1.jpg",
          "../../../assets/projectPhotos/Emcure 2.jpg",
          "../../../assets/projectPhotos/Emcure 3.jpg"
        ]
      },
      "pro11": {
        "proName": "FDC Limited",
        "proLocation": "Sinnar, Maharashtra",
        "proLogo": "../../../assets/projectLogos/fdc-logo.png",
        "proMainImg": "../../../assets/projectPhotos/FDC1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/FDC1.jpg",
          "../../../assets/projectPhotos/FDC2.png",
          "../../../assets/projectPhotos/FDC2.png"
        ]
      },
      "pro12": {
        "proName": "Dohler India Pvt. Ltd.",
        "proLocation": "Hinjewadi, Pune , Maharashtra",
        "proLogo": "../../../assets/projectLogos/dohler-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Doehler 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Doehler 1.jpg",
          "../../../assets/projectPhotos/Doehler 2.jpg",
          "../../../assets/projectPhotos/Doehler 3.jpg"
        ]
      },
      "pro13": {
        "proName": "Kerry Ingredients India Pvt. Ltd.",
        "proLocation": "Bawal, Haryana",
        "proLogo": "../../../assets/projectLogos/kerry-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Kerry 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Kerry 1.jpg",
          // "../../../assets/projectPhotos/Mahindra2.jpg",
          // "../../../assets/projectPhotos/Mahindra3.JPG"
        ]
      },
      "pro14": {
        "proName": "Schreiber Dynamix Dairies Limited",
        "proLocation": "Baramati, Maharashtra",
        "proLogo": "../../../assets/projectLogos/schreiber-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Screibher 3.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Screibher 1.jpg",
          "../../../assets/projectPhotos/Screibher 2.jpg",
          "../../../assets/projectPhotos/Screibher 3.jpg"
        ]
      },
      "pro15": {
        "proName": "Oswal F M Hammerle Ltd.",
        "proLocation": "Kolhapur, Maharashtra",
        "proLogo": "../../../assets/projectLogos/oswal-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Oswal F.M. Hammerle 2.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Oswal F.M. Hammerle 1.jpg",
          "../../../assets/projectPhotos/Oswal F.M. Hammerle 2.jpg",
          "../../../assets/projectPhotos/Oswal F.M. Hammerle 3.jpg"
        ]
      },
      "pro16": {
        "proName": "Soktas Textile",
        "proLocation": "Kolhapur, Maharashtra",
        "proLogo": "../../../assets/projectLogos/soktas-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Soktas 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Soktas 1.jpg",
          "../../../assets/projectPhotos/Soktas 2.jpg",
          "../../../assets/projectPhotos/Soktas 3.jpg"
        ]
      },
      "pro17": {
        "proName": "Brinton Carpets",
        "proLocation": "Pirangut, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/brinton -logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Brinton1.png",
        "proImages": [
          "../../../assets/projectPhotos/Brinton1.png",
          "../../../assets/projectPhotos/Brinton2.png",
          "../../../assets/projectPhotos/Brinton3.png"
        ]
      },
      "pro18": {
        "proName": "Tessitura Monti India pvt.ltd.",
        "proLocation": "Kolhapur, Maharashtra",
        "proLogo": "../../../assets/projectLogos/tessitura_monti_logo.png",
        "proMainImg": "../../../assets/projectPhotos/tessitura.png",
        "proImages": [
          "../../../assets/projectPhotos/tessitura.png",
          // "../../../assets/projectPhotos/Mahindra2.jpg",
          // "../../../assets/projectPhotos/Mahindra3.JPG"
        ]
      },
      "pro19": {
        "proName": "Geberit India Manufacturing Pvt. Ltd.",
        "proLocation": "Chakan MIDC, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/geberit-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Geberit.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Geberit.jpg",
          // "../../../assets/projectPhotos/Mahindra2.jpg",
          // "../../../assets/projectPhotos/Mahindra3.JPG"
        ]
      },
      "pro20": {
        "proName": "Forbes Marshall Pvt. Ltd.",
        "proLocation": "Chakan MIDC, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/forbesMarshall-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Forbes 2.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Forbes 1.jpg",
          "../../../assets/projectPhotos/Forbes 2.jpg",
          "../../../assets/projectPhotos/Forbes 3.jpg"
        ]
      },
      "pro21": {
        "proName": "Bedmutha Industries",
        "proLocation": "Dhule, Maharashtra",
        "proLogo": "../../../assets/projectLogos/bedmutha-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Bedmutha 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Bedmutha 1.jpg",
          "../../../assets/projectPhotos/Bedmutha 2.jpg",
          "../../../assets/projectPhotos/Bedmutha 3.jpg"
        ]
      },
      "pro22": {
        "proName": "GERA Developers",
        "proLocation": "Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/gera-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Gera 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Gera 1.jpg",
          "../../../assets/projectPhotos/Gera 2.jpg",
          // "../../../assets/projectPhotos/Mahindra3.JPG"
        ]
      },
      "pro23": {
        "proName": "Holtec Asia",
        "proLocation": "Dahej, Gujarat",
        "proLogo": "../../../assets/projectLogos/holtec-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/HOLTEC 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/HOLTEC 1.jpg",
          "../../../assets/projectPhotos/HOLTEC 2.jpg",
          "../../../assets/projectPhotos/HOLTEC 3.jpg"
        ]
      },
      "pro24": {
        "proName": "Orchid India Medisolution Pvt. Ltd.",
        "proLocation": "Hinjewadi, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/orchid-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/orchid_1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/orchid_1.jpg",
          "../../../assets/projectPhotos/orchid_2.jpg",
          "../../../assets/projectPhotos/orchid_3.jpg"
        ]
      },
    }
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
