import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryModule } from 'ngx-gallery';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ManagementComponent } from './management/management.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { QualityPolicyComponent } from './quality-policy/quality-policy.component';
import { ActivitesComponent } from './activites/activites.component';
import { SafetyPolicyComponent } from './safety-policy/safety-policy.component';

@NgModule({
  declarations: [OverviewComponent, ManagementComponent, VisionMissionComponent, QualityPolicyComponent, ActivitesComponent, SafetyPolicyComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    NgxGalleryModule
  ]
})
export class AboutusModule { }
