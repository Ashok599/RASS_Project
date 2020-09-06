import { Component, Input, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from './hello-slide.animation';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class ProjectsComponent implements OnInit {
  @Input() name: string;
  closeResult: string;
  // mahindra  = [
  //   '../../../assets/projectPhotos/Mahindra1.JPG',
  //   '../../../assets/projectPhotos/Mahindra2.jpg',
  //   '../../../assets/projectPhotos/Mahindra3.JPG',
  //   // '../../../assets/projectPhotos/Bedmutha 4.jpg'
  // ];

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
    interval: { timing: 2000 },
    animation: 'lazy'
  };
  tempData: any[];
  proData: any = [];
  proTitle: any;
  display = false;
  proLogo: any;
  proAdd: any;
  
  constructor(private cdr: ChangeDetectorRef, private modalService: NgbModal) {}

  open(content, projectData) {
    // debugger;
    this.display = true
    this.proData = projectData.proImages;
    this.proTitle = projectData.proName;
    this.proLogo = projectData.proLogo;
    this.proAdd = projectData.proLocation;

      // this.modalService.open(content, { size: 'lg', centered: true, windowClass: 'my-modal' });

  } 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
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
          "../../../assets/projectPhotos/SEW3.jpg"
        ]
      },
      "pro38": {
        "proName": "Konkan Railway Corporation Ltd.",
        "proLocation": "Chiplun",
        "proLogo": "../../../assets/projectLogos/SEW-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Konkan1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Konkan1.jpg",
          "../../../assets/projectPhotos/Konkan2.jpg",
          "../../../assets/projectPhotos/Konkan3.jpg",
          "../../../assets/projectPhotos/Konkan4.jpg",
          "../../../assets/projectPhotos/Konkan5.jpg",
          "../../../assets/projectPhotos/Konkan6.jpg",
          "../../../assets/projectPhotos/Konkan7.jpg"
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
          "../../../assets/projectPhotos/HUF3.jpg"
        ]
      },
      "pro3": {
        "proName": "Mahindra Gears & Transmission",
        "proLocation": "Chakan MIDC, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/mgt-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Mahindra-Gears1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Mahindra-Gears1.jpg",
          "../../../assets/projectPhotos/Mahindra-Gears2.jpg",
        ]
      },
      "pro4": {
        "proName": "General Motors (Export Shed)",
        "proLocation": "Talegaon, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/gm-logo.png",
        "proMainImg": "../../../assets/projectPhotos/General Motors 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/General Motors 1.jpg",
          "../../../assets/projectPhotos/General Motors 2.jpg"
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
        "proLocation": "Nashik",
        "proLogo": "../../../assets/projectLogos/mahindra-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Mahindra 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Mahindra 1.jpg",
          "../../../assets/projectPhotos/Mahindra 2.jpg",
          "../../../assets/projectPhotos/Mahindra 3.JPG"
        ]
      },
      "pro7": {
        "proName": "Krohne Marshall",
        "proLocation": "Pune",
        "proLogo": "../../../assets/projectLogos/kron-log.jpg",
        "proMainImg": "../../../assets/projectPhotos/Krohne 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Krohne 1.jpg",
          "../../../assets/projectPhotos/Krohne 2.jpg",
          "../../../assets/projectPhotos/Krohne 3.jpg",
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
          "../../../assets/projectPhotos/Madhusilica 3.jpg",
          "../../../assets/projectPhotos/Madhusilica 4.jpg"
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
      "pro14": {
        "proName": "Mahindra Agri Ltd",
        "proLocation": "Nifhad, Nashik",
        "proLogo": "../../../assets/projectLogos/mahindra-agri-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Mahindra-Agri1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Mahindra-Agri1.jpg",
          "../../../assets/projectPhotos/Mahindra-Agri2.jpg",
          "../../../assets/projectPhotos/Mahindra-Agri3.jpg"
        ]
      },
      "pro16": {
        "proName": "United Phosphorous Ltd",
        "proLocation": "Jhagadia, Ankleshwar, Vapi and Tarapur",
        "proLogo": "../../../assets/projectLogos/united-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/UPL1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/UPL1.jpg",
          "../../../assets/projectPhotos/UPL2.jpg",
          "../../../assets/projectPhotos/UPL3.jpg"
        ]
      },
      "pro17": {
        "proName": "Bobst India",
        "proLocation": "Pirangut",
        "proLogo": "../../../assets/projectLogos/bobst-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Bobst 1.JPG",
        "proImages": [
          "../../../assets/projectPhotos/Bobst 1.JPG",
          "../../../assets/projectPhotos/Bobst 2.JPG",
          "../../../assets/projectPhotos/Bobst 3.JPG"
        ]
      },
      "pro19": {
        "proName": "Geberit India Manufacturing Pvt. Ltd.",
        "proLocation": "Chakan MIDC, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/geberit-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Geberit.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Geberit.jpg"
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
          "../../../assets/projectPhotos/Forbes 3.jpg",
          "../../../assets/projectPhotos/Forbes 4.jpg"
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
          "../../../assets/projectPhotos/Gera 3.jpg",
        ]
      },
      "pro23": {
        "proName": "Holtec Asia",
        "proLocation": "Dahej, Gujarat",
        "proLogo": "../../../assets/projectLogos/holtec-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/HOLTEC 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/HOLTEC 1.jpg",
          "../../../assets/projectPhotos/Holtec 2.jpg",
          "../../../assets/projectPhotos/Holtec 3.jpg",
          "../../../assets/projectPhotos/Holtec 4.png"
        ]
      },
      "pro24": {
        "proName": "Orchid Medisolution India Pvt. Ltd.",
        "proLocation": "Hinjewadi, Pune, Maharashtra",
        "proLogo": "../../../assets/projectLogos/orchid-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/orchid_1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/orchid_1.jpg",
          "../../../assets/projectPhotos/orchid_2.jpg",
          "../../../assets/projectPhotos/orchid_3.jpg"
        ]
      },
      "pro25": {
        "proName": "Cummins Technologies Pvt. Ltd.",
        "proLocation": "Phaltan",
        "proLogo": "../../../assets/projectLogos/orchid-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Cummins Technologies Pvt. Ltd., Phaltan.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Cummins Technologies Pvt. Ltd., Phaltan.jpg",
        ]
      },
      "pro26": {
        "proName": "Endress + Hauser",
        "proLocation": "Aurangabad",
        "proLogo": "../../../assets/projectLogos/endress-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/endress1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/endress1.jpg",
          "../../../assets/projectPhotos/endress2.jpg",
          "../../../assets/projectPhotos/endress3.jpg",
        ]
      },
      "pro27": {
        "proName": "Daramic Battery Separator",
        "proLocation": "Dahej",
        "proLogo": "../../../assets/projectLogos/dramic-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/daramic1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/daramic1.jpg",
          "../../../assets/projectPhotos/daramic2.jpg",
          "../../../assets/projectPhotos/daramic3.jpg",
          "../../../assets/projectPhotos/daramic4.jpg",
        ]
      },
      "pro28": {
        "proName": "Mother Dairy Fruits and Vegetables Pvt Ltd",
        "proLocation": "Bhiwandi",
        "proLogo": "../../../assets/projectLogos/mother-dairy-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/mother-dairy1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/mother-dairy1.jpg",
        ]
      },
      "pro29": {
        "proName": "Child Care Centre by Integrity Foundation",
        "proLocation": "Ahmednagar",
        "proLogo": "../../../assets/projectLogos/mother-dairy-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Child Care Centre by Integrity Foundation, Ahmednagar 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Child Care Centre by Integrity Foundation, Ahmednagar 1.jpg",
          "../../../assets/projectPhotos/Child Care Centre by Integrity Foundation, Ahmednagar 2.jpg",
          "../../../assets/projectPhotos/Child Care Centre by Integrity Foundation, Ahmednagar 3.jpg",

        ]
      },
      "pro30": {
        "proName": "Cummins Turbo technologies",
        "proLocation": "Pithampur",
        "proLogo": "../../../assets/projectLogos/mother-dairy-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Cummins Turbo technologies, Pithampur 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Cummins Turbo technologies, Pithampur 1.jpg",
          "../../../assets/projectPhotos/Cummins Turbo technologies, Pithampur 2.jpg",
          "../../../assets/projectPhotos/Cummins Turbo technologies, Pithampur 3.jpg",
          "../../../assets/projectPhotos/Cummins Turbo technologies, Pithampur 4.jpg",
          "../../../assets/projectPhotos/Cummins Turbo technologies, Pithampur 5.jpg",
        ]
      },
      "pro31": {
        "proName": "Decathlon Sports India Pvt. Ltd.",
        "proLocation": "Pune and Nashik",
        "proLogo": "../../../assets/projectLogos/mother-dairy-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Decathlon Sports India Pvt. Ltd. - Pune and Nashik.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Decathlon Sports India Pvt. Ltd. - Pune and Nashik.jpg",
        ]
      },
      "pro32": {
        "proName": "PLANSEE India High Performance Materials Pvt Ltd",
        "proLocation": "Mysore",
        "proLogo": "../../../assets/projectLogos/plansee-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Plansee 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Plansee 1.jpg",
          "../../../assets/projectPhotos/Plansee 2.jpg",
        ]
      },
      "pro33": {
        "proName": "Temple Packaging",
        "proLocation": "Hyderabad, Daman and Indore",
        "proLogo": "../../../assets/projectLogos/temple-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/TEMPLE1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/TEMPLE1.jpg",
          "../../../assets/projectPhotos/TEMPLE2.jpg",
        ]
      },
      "pro34": {
        "proName": "E-Prashasan",
        "proLocation": "Pune",
        "proLogo": "../../../assets/projectLogos/temple-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/E-Prashasan, Pune 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/E-Prashasan, Pune 1.jpg",
          "../../../assets/projectPhotos/E-Prashasan, Pune 1.jpg",
        ]
      },
      "pro35": {
        "proName": "G.B.Gummi LLP",
        "proLocation": "Shirval",
        "proLogo": "../../../assets/projectLogos/temple-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/G.B.Gummi LLP, Shirval 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/G.B.Gummi LLP, Shirval 1.jpg",
          "../../../assets/projectPhotos/G.B.Gummi LLP, Shirval 2.jpg",
          "../../../assets/projectPhotos/G.B.Gummi LLP, Shirval 3.jpg",
        ]
      },
      "pro36": {
        "proName": "Givaudan",
        "proLocation": "",
        "proLogo": "../../../assets/projectLogos/temple-logo.jpg",
        "proMainImg": "../../../assets/projectPhotos/Givaudan 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Givaudan 1.jpg",
          "../../../assets/projectPhotos/Givaudan 2.jpg",
          "../../../assets/projectPhotos/Givaudan 3.jpg",
        ]
      },
      "pro37": {
        "proName": "Jai Hind School",
        "proLocation": "Pune",
        "proLogo": "../../../assets/projectLogos/jaihind-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Jai Hind School 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Jai Hind School 1.jpg",
          "../../../assets/projectPhotos/Jai Hind School 2.jpg",
          "../../../assets/projectPhotos/Jai Hind School 3.jpg",
          "../../../assets/projectPhotos/Jai Hind School 4.jpg"
        ]
      },
      "pro39": {
        "proName": "Global Highstreet Mall",
        "proLocation": "Pune",
        "proLogo": "../../../assets/projectLogos/jaihind-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Global Highstreet Mall, Pune 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Global Highstreet Mall, Pune 1.jpg",
          "../../../assets/projectPhotos/Global Highstreet Mall, Pune 2.jpg",
          "../../../assets/projectPhotos/Global Highstreet Mall, Pune 3.jpg",
        ]
      },
      "pro40": {
        "proName": "Joyville Housing",
        "proLocation": "Pune",
        "proLogo": "../../../assets/projectLogos/jaihind-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Joyville Housing, Pune 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Joyville Housing, Pune 1.jpg",
          "../../../assets/projectPhotos/Joyville Housing, Pune 2.jfif",
          "../../../assets/projectPhotos/Joyville Housing, Pune 3.jfif",
        ]
      },
      "pro41": {
        "proName": "Joyville Housing",
        "proLocation": "Pune",
        "proLogo": "../../../assets/projectLogos/jaihind-logo.png",
        "proMainImg": "../../../assets/projectPhotos/Joyville Housing, Pune 1.jpg",
        "proImages": [
          "../../../assets/projectPhotos/Joyville Housing, Pune 1.jpg",
          "../../../assets/projectPhotos/Joyville Housing, Pune 2.jfif",
          "../../../assets/projectPhotos/Joyville Housing, Pune 3.jfif",
        ]
      },
    }
  }
}
