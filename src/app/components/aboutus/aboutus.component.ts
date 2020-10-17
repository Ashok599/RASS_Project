import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  activeTab: any = '';
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    let temp = this.route.snapshot['_routerState'].url;
    temp = temp.split('/');
    let comUrl = temp[temp.length - 1];
    switch (comUrl) {
      case 'overview':
        this.activeTab = 'overview';
        break;
      case 'qualitypolicy':
        this.activeTab = 'quality';
        break;
      case 'vision-and-mission':
        this.activeTab = 'vision';
        break;
      case 'management':
        this.activeTab = 'management';
        break;
      case 'our-teams':
        this.activeTab = 'teams';
        break;
      case 'safetypolicy':
        this.activeTab = 'safety';
        break;

      default:
        this.activeTab = 'overview';
        break;
    }
    // this.activeTab = 'overview';
  }


}
