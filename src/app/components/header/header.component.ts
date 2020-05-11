import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTab: any = '';

  constructor() { }

  ngOnInit() {

    // if(localStorage.getItem('activeheaderTab')) {
    //   this.headerTab = localStorage.getItem('activeheaderTab');
    // }
    // else {
    //   this.headerTab = 'home';
    // }
  }

}
