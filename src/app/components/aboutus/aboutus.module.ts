import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ManagementComponent } from './management/management.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { QualityPolicyComponent } from './quality-policy/quality-policy.component';

@NgModule({
  declarations: [OverviewComponent, ManagementComponent, VisionMissionComponent, QualityPolicyComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ]
})
export class AboutusModule { }
