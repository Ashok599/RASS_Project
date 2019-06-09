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
import { ProjectsModule } from './components/projects/projects.module';
import { AboutusModule } from './components/aboutus/aboutus.module';

import { AgmCoreModule } from '@agm/core';

import { NguCarouselModule } from '@ngu/carousel';
import { OurclientsComponent } from './components/ourclients/ourclients.component';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    HeaderComponent, 
    ProjectsComponent, 
    ServicesComponent, 
    AboutusComponent, 
    ContactusComponent, 
    OurclientsComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ProjectsModule, 
    NgbModule, 
    FormsModule, 
    AboutusModule, 
    AccordionModule, 
    BrowserAnimationsModule, 
    NguCarouselModule, 
    DialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
