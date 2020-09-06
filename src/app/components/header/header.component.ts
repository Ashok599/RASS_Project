import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTab: any = '';
  Url: any;

  constructor(private router: Router,
    private sharedService: DataService) { }

  ngOnInit() {
    this.Url = window.location.href
    this.sharedService.sharedMessage.subscribe(message => this.headerTab = message);
    if(this.Url.includes('projects')) {
      this.headerTab = 'project';
    }
    else if(this.Url.includes('aboutus')) {
      this.headerTab = 'aboutus';
    }
    else if(this.Url.includes('services')) {
      this.headerTab = 'services';
    }
    else if(this.Url.includes('ourclients')) {
      this.headerTab = 'ourclients';
    }
    else if(this.Url.includes('contactus')) {
      this.headerTab = 'contactus';
    }
    else if(this.Url.includes('home')) {
      this.headerTab = 'home';
    }
    else {
      this.headerTab = 'home';
    }
    // if(localStorage.getItem('activeheaderTab')) {
    //   this.headerTab = localStorage.getItem('activeheaderTab');
    // }
    // else {
    //   this.headerTab = 'home';
    // }
  }

}
