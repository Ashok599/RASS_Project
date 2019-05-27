import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers: [ROUTER_PROVIDERS]
})
export class ServicesComponent implements OnInit {

  subList = false;
  onLoad = true;

  constructor(private router: Router, private data_service: DataService) { }

  ngOnInit() {
    console.log("this.router.url : ", this.router.url);
    if (this.router.url == '/services' || this.router.url == '/services/pre-construction') {
      this.router.navigateByUrl('/services/pre-construction');
    } else if (this.router.url == '/pre-construction') { 
      this.router.navigateByUrl('/services/pre-construction');
    } else if (this.router.url != '/services/post-construction') { 
      this.router.navigateByUrl('/services/post-construction');
    }

    // if (this.router.url != 'services/pre-construction') {
    //   this.router.navigateByUrl('services/pre-construction');
    // } else {
    //   this.router.navigateByUrl('services/construction');
    // }
  }

  toggleSubList() {
    if (this.onLoad) {
      this.subList = !this.subList;
    }
    else {
      this.subList = !this.subList;
    }
  }
  
  public showSubService(service: string) {
    this.data_service.notifyOther(service);
  }

}
