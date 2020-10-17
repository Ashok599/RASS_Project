import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '100%',
        height: '36.5em',
        thumbnailsColumns: 4
      }
    ];

    this.galleryImages = [
      {
        small: '../../../../assets/ourTeams/9E5A0404.JPG',
        medium: '../../../../assets/ourTeams/9E5A0404.JPG',
        big: '../../../../assets/ourTeams/9E5A0404.JPG'
      },
      {
        small: '../../../../assets/ourTeams/9E5A0628.JPG',
        medium: '../../../../assets/ourTeams/9E5A0628.JPG',
        big: '../../../../assets/ourTeams/9E5A0628.JPG'
      },
      {
        small: '../../../../assets/ourTeams/DSC_0008.JPG',
        medium: '../../../../assets/ourTeams/DSC_0008.JPG',
        big: '../../../../assets/ourTeams/DSC_0008.JPG'
      },
      {
        small: '../../../../assets/ourTeams/DSC_0080.JPG',
        medium: '../../../../assets/ourTeams/DSC_0080.JPG',
        big: '../../../../assets/ourTeams/DSC_0080.JPG'
      },
      {
        small: '../../../../assets/ourTeams/DSC_0082.jpg',
        medium: '../../../../assets/ourTeams/DSC_0082.jpg',
        big: '../../../../assets/ourTeams/DSC_0082.jpg'
      },
      {
        small: '../../../../assets/ourTeams/DSC_0101.JPG',
        medium: '../../../../assets/ourTeams/DSC_0101.JPG',
        big: '../../../../assets/ourTeams/DSC_0101.JPG'
      },
      {
        small: '../../../../assets/ourTeams/DSC_0201.JPG',
        medium: '../../../../assets/ourTeams/DSC_0201.JPG',
        big: '../../../../assets/ourTeams/DSC_0201.JPG'
      },
      {
        small: '../../../../assets/ourTeams/DSC_5022.JPG',
        medium: '../../../../assets/ourTeams/DSC_5022.JPG',
        big: '../../../../assets/ourTeams/DSC_5022.JPG'
      },
      {
        small: '../../../../assets/ourTeams/DSC_5531.JPG',
        medium: '../../../../assets/ourTeams/DSC_5531.JPG',
        big: '../../../../assets/ourTeams/DSC_5531.JPG'
      },
      {
        small: '../../../../assets/ourTeams/FB_IMG_1566535459179.jpg',
        medium: '../../../../assets/ourTeams/FB_IMG_1566535459179.jpg',
        big: '../../../../assets/ourTeams/FB_IMG_1566535459179.jpg'
      },
      {
        small: '../../../../assets/ourTeams/FB_IMG_1566535479793.jpg',
        medium: '../../../../assets/ourTeams/FB_IMG_1566535479793.jpg',
        big: '../../../../assets/ourTeams/FB_IMG_1566535479793.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20170205-WA0079.jpg',
        medium: '../../../../assets/ourTeams/IMG-20170205-WA0079.jpg',
        big: '../../../../assets/ourTeams/IMG-20170205-WA0079.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20180106-WA0193.jpg',
        medium: '../../../../assets/ourTeams/IMG-20180106-WA0193.jpg',
        big: '../../../../assets/ourTeams/IMG-20180106-WA0193.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190303-WA0148.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190303-WA0148.jpg',
        big: '../../../../assets/ourTeams/IMG-20190303-WA0148.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190605-WA0097.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190605-WA0097.jpg',
        big: '../../../../assets/ourTeams/IMG-20190605-WA0097.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190605-WA0099.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190605-WA0099.jpg',
        big: '../../../../assets/ourTeams/IMG-20190605-WA0099.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190818-WA0140.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190818-WA0140.jpg',
        big: '../../../../assets/ourTeams/IMG-20190818-WA0140.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190818-WA0205.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190818-WA0205.jpg',
        big: '../../../../assets/ourTeams/IMG-20190818-WA0205.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190825-WA0244.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190825-WA0244.jpg',
        big: '../../../../assets/ourTeams/IMG-20190825-WA0244.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190825-WA0256.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190825-WA0256.jpg',
        big: '../../../../assets/ourTeams/IMG-20190825-WA0256.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190825-WA0265.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190825-WA0265.jpg',
        big: '../../../../assets/ourTeams/IMG-20190825-WA0265.jpg'
      },
      {
        small: '../../../../assets/ourTeams/IMG-20190825-WA0350.jpg',
        medium: '../../../../assets/ourTeams/IMG-20190825-WA0350.jpg',
        big: '../../../../assets/ourTeams/IMG-20190825-WA0350.jpg'
      },
    ];
  }

}
