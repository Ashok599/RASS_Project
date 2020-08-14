import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  activeTab: any = '';
  constructor() { }

  ngOnInit() {

    this.activeTab = 'overview';
  }


}
