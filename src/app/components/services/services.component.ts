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

  // subList = false;
  // onLoad = true;
  constrObj: any = {};

  constructor(private router: Router, private data_service: DataService) { }

  ngOnInit() {
    this.constrObj = {
      "Time Management": {
        "isEnabled": true,
        "imgSrc": "../../../../../assets/images/subServices/time-management1.png",
        "values": [
          "Milestone Schedule",
          "Critical Path Review",
          "Schedule Review",
          "Resources Requirements",
          "Anticipated Cash Flow",
          "Progress/Performance review"
        ]
      },
      "Cost Management": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/subServices/cost-management1.png",
        "values": [
          "Actual v/s Budgeted costs",
          "Bill Checking",
          "Monitor cash flow",
          "Evaluate change/variations impact",
          "Develop cost forecasts"
        ]
      },
       "Quality Management": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/subServices/time-management1.png",
        "values": [
          "Daily Supervision",
          "Review and Approval of Materials",
          "Timely inspections and testing",
          "Quality Trainings",
          "Internal Quality Audit",
          "Snag lists implementation"
        ]
      },
       "Safety Management": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/subServices/safety-management.png",
        "values": [
          "Safety Induction",
          "Safety Audits",
          "Work Permit Implementation",
          "Daily Supervision",
          "Safety Training"
        ]
      },
       "Risk Management": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/subServices/risk-management.png",
        "values": [
          "Identification of Risk",
          "Evaluation of Risk",
          "Risk mitigation Strategies",
          "Maintain Risk Register"
        ]
      }
    };
    // console.log("this.router.url : ", this.router.url);
    // if (this.router.url == '/services' || this.router.url == '/services/pre-construction') {
    //   this.router.navigateByUrl('/services/pre-construction');
    // } else if (this.router.url == '/pre-construction') { 
    //   this.router.navigateByUrl('/services/pre-construction');
    // } else if (this.router.url != '/services/post-construction') { 
    //   this.router.navigateByUrl('/services/post-construction');
    // }

    // if (this.router.url != 'services/pre-construction') {
    //   this.router.navigateByUrl('services/pre-construction');
    // } else {
    //   this.router.navigateByUrl('services/construction');
    // }
  }

  showSubService(service: any) {
    switch (service) {
      case service: {
        for (let key in this.constrObj) {
          // console.log(key);
          if(key){
            if (service == key) {
              this.constrObj[key].isEnabled = true;
            } else {
              this.constrObj[key].isEnabled = false;
            }
          }
        }
        break;
      }
    }
  }

  // toggleSubList() {
  //   if (this.onLoad) {
  //     this.subList = !this.subList;
  //   }
  //   else {
  //     this.subList = !this.subList;
  //   }
  // }
  
  // public showSubService(service: string) {
  //   this.data_service.notifyOther(service);
  // }

}
