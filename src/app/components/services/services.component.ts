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
  design = true;
  management = false;
  construction = false;
  constrObj: any = {};
  activeTab: any = '';

  constructor(private router: Router, private data_service: DataService) { }

  ngOnInit() {
    this.constrObj = {
      "Architectural/ Structural": {
        "isEnabled": true,
        "imgSrc": "../../../../../assets/images/Architectural-Structural.jpg",
        "values": [
          "Master Planning",
          "Design Basis Report",
          "Concept Designs",
          "3D Views",
          "Working Drawings",
          "LEED certification",
          "Integrated Drawings",
          "As-Built Drawings",
          "BOQ/ Tendering"
        ]
      },
      "Electrical Engineering": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/Electrical-Engineering.jpg",
        "values": [
          "HT/LT",
          "DG/ Transformer/ Panels",
          "Lighting",
          "3D Views",
          "IT/ Telecommunication",
          "Fire Alarm",
          "Data/ Voice",
          "Solar System",
          "BOQ/ Tendering"
        ]
      },
      "Mechanical Engineering": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/Mechanical-Engineering.jpg",
        "values": [
          "Fire Fighting",
          "Process Piping",
          "Utility Piping",
          "HVAC",
          "ETP/ STP",
          "LPG/ CNG/ Steam",
          "BOQ/ Tendering"
        ]
      },
      "Pre-Construction Stage": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/preConstruction.jpg",
        "values": [
          "Liasoning",
          "Constructability Review",
          "Value Engineering",
          "Tracking Design Deliverables",
          "Pre-Qualification of Contractors",
          "Review of Tender Documents",
          "Techno-Commercial Negotiation"
        ]
      },
      "Post-Construction Stage": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/postConstruction.png",
        "values": [
          "Final Reconciliation",
          "Extra Item Settlement",
          "Project Completion Report",
          "Assistance in As-Built",
          "Drawings",
          "Handover Documentation"
        ]
      },
      "Time Management": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/subServices/time-management2.png",
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
        "imgSrc": "../../../../../assets/images/subServices/Quality-Management.png",
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
  }

  showSubService(service: any) {
    this.activeTab = service;
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

  toggleSubList(list) {
    if (list == "design") {
      this.design = !this.design;
      // this.management = false;
    }
    else if(list == "management"){
      this.management = !this.management;
      // this.design = false;
      if(!this.management){
        this.construction = false;
      }
    }
    else if (list == "construction") {
      debugger
      this.construction = !this.construction;
    }
  }
  
  // public showSubService(service: string) {
  //   this.data_service.notifyOther(service);
  // }

}
