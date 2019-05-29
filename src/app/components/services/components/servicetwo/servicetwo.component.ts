import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'servicetwo',
  templateUrl: './servicetwo.component.html',
  styleUrls: ['./servicetwo.component.css']
})
export class ServicetwoComponent implements OnInit {
  private subscription: Subscription;
  _object: Object;
  risk: boolean;
  safety: boolean;
  quality: boolean;
  cost: boolean;
  time = true;
  constrObj: any = {};
  constructor(private data_service: DataService,private router:Router) { }

  ngOnInit() {
    console.log(this.router);
    this.router.navigateByUrl('/services/construction');



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
    this.subscription = this.data_service.notifyObservable$.subscribe(res => {
      console.log("res : ", res);
      this.showSubService(res);
    }, error => {
      console.log("error : ", error);
    })
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
}
