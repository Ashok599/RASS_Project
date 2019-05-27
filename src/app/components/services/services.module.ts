import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceoneComponent } from './components/serviceone/serviceone.component';
import { ServicetwoComponent } from './components/servicetwo/servicetwo.component';
import { ServicethreeComponent } from './components/servicethree/servicethree.component';


@NgModule({
  declarations: [ServiceoneComponent, ServicetwoComponent, ServicethreeComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule {

}
