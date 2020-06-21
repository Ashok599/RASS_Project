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
    this.activeTab = 'Architectural/ Structural Design';
    this.constrObj = {
      "Architectural/ Structural Design": {
        "isEnabled": true,
        "imgSrc": "../../../../../assets/images/Architectural-Structural.jpg",
        "values": [
          "Formulation of the Concept",
          "Preparing Design basis report",
          "LEED/IGBC Certification",
          "Developing Master Plan and Layouts",
          "Detailed Design",
          "3 Dimensional Study and views",
          "Working Drawings - Plans, Sections, Elevations and Details",
          "Structural Analysis and Design",
          "Preparing detail structural drawings",
          "Finalizing Specifications, Bill of Quantities",
          "As Built Drawings"
        ]
      },
      "Electrical Design": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/Electrical-Engineering.jpg",
        "values": [
          "Preparation of design basis report",
          "Liasoning with Power Supply Boards",
          "HT and LT Distribution Design and layout",
          "High tension & low tension substation layout",
          "System Power Flow, Study Fault Level Analysis",
          "Design plant lightning, street lighting, yard lightning etc",
          "Emergency power supply & distribution ",
          "Relay Coordination and Settings",
          "Earthing and Lightning Protection",
          "Control Automation and Instrumentation plan",
          "Transformer and Generator Protection",
          "Prepare scheme for Data/Voice Cabling",
          "Design of solar system",
          "Testing and Commissioning Assistance",
          "Preparation of tender document, BOQ and estimate"
        ]
      },
      "HVAC and Ventilation Design": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/Mechanical-Engineering.jpg",
        "values": [
          "Evaluation of Ventilation and Atmospheric Control Requirements  ",
          "Heat Load Calculations",
          "Design entire HVAC System",
          "Clean Room Assessment and Design",
          "Selection of Proper Equipment",
          "Preparation of detailed working Drawings",
          "Detailed Drawing and Design for Ducting, Equipment, Piping etc",
          "Preparation of tender document, BOQ and estimate",
          "Inspection, Validation, Testing and Commissioning"
        ]
      },
      "Fire Fighting Design": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/Mechanical-Engineering.jpg",
        "values": [
          "Design of firefighting system based on statutory norms and requirements",
          "Preparation of detailed working Drawings",
          "Preparation of tender document, BOQ and estimate",
          "Installation and Testing Supervision"
        ]
      },
      "Interior and Landscape Design": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/Mechanical-Engineering.jpg",
        "values": [
          "Formulation of the concept", 
          "Design Grass, trees & shrubs pattern as per climatic conditions & availability of substrat",
          "Selection of various Trees, Shrubs, Border Flowering Plants, Lawns etc. for Landscaping",
          "Design good irrigation system for Landscaping work using recycled water",
          "Preparation of detailed working Drawings in accordance with concept",
          "Preparation of tender document, BOQ and estimate"
        ]
      },
      "Pre-Construction Stage": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/preConstruction.jpg",
        "values": [
          "Statutory Liasoning",
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
          "Assistance in As-Built Drawings",
          "Closing of Snag list Items",
          "Commercial close-out",
          "Handover Documentation"
        ]
      },
      "Time Management": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/subServices/time-management2.png",
        "values": [
          "Milestone Schedule",
          "Baseline Schedule",
          "Critical Path Review",
          "Tracking of Schedule",
          "Recovery schedule in case of delay",
          "Anticipated Cash Flow",
          "Progress/Performance review",
          "Time Impact Analysis"
        ]
      },
      "Cost Management": {
        "isEnabled": false,
        "imgSrc": "../../../../../assets/images/subServices/cost-management1.png",
        "values": [
          "Actual v/s Budgeted costs ",
          "Scrutiny of contractors bill and certification",
          "Prepare and Monitor cash flow",
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
          "Safety Training",
          "Safety Documentation",
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
