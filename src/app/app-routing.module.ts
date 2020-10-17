import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OurclientsComponent } from './components/ourclients/ourclients.component';

import { OverviewComponent } from './components/aboutus/overview/overview.component';
import { QualityPolicyComponent } from './components/aboutus/quality-policy/quality-policy.component';
import { VisionMissionComponent } from './components/aboutus/vision-mission/vision-mission.component';
import { ManagementComponent } from './components/aboutus/management/management.component';
import { ActivitesComponent } from './components/aboutus/activites/activites.component';
import { SafetyPolicyComponent } from './components/aboutus/safety-policy/safety-policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'qualitypolicy',
        component: QualityPolicyComponent
      },
      {
        path: 'vision-and-mission',
        component: VisionMissionComponent
      },
      {
        path: 'management',
        component: ManagementComponent
      },
      { path: 'our-teams', component: ActivitesComponent },
      { path: 'safetypolicy', component: SafetyPolicyComponent },
    ]
  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'ourclients', component: OurclientsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
