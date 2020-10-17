import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management/management.component';
import { OverviewComponent } from './overview/overview.component';
import { QualityPolicyComponent } from './quality-policy/quality-policy.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { ActivitesComponent } from './activites/activites.component';

const routes: Routes = [
  { path: '', component: ManagementComponent, pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'qualitypolicy', component: QualityPolicyComponent },
  { path: 'vision-and-mission', component: VisionMissionComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'our-teams', component: ActivitesComponent },
  // { path: '**', component: ServicethreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
