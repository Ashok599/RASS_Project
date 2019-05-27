import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServiceoneComponent } from './components/serviceone/serviceone.component';
import { ServicetwoComponent } from './components/servicetwo/servicetwo.component';
import { ServicethreeComponent } from './components/servicethree/servicethree.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'services',
    pathMatch: 'full'
  },
  {
    path: 'services',
    component: ServicesComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        redirectTo: 'services/pre-construction',
        pathMatch: 'full'
      },
      {
        path: 'services/pre-construction',
        component: ServiceoneComponent
      },
      {
        path: 'services/construction',
        component: ServicetwoComponent
      },
      {
        path: 'services/post-construction',
        component: ServicethreeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesRoutingModule {

}
