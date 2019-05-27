import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesModule } from './components/services/services.module';
import { ProjectsModule } from './components/projects/projects.module';
import { AboutusModule } from './components/aboutus/aboutus.module';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, ProjectsComponent, ServicesComponent, AboutusComponent, ContactusComponent],
  imports: [
    BrowserModule, AppRoutingModule, ServicesModule, ProjectsModule, NgbModule, AboutusModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
