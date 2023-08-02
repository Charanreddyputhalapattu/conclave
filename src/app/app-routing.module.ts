import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SpeakersComponent } from './component/speakers/speakers.component';
import { EventsComponent } from './component/events/events.component';
import { NationalHTComponent } from './component/national-ht/national-ht.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ProjectShowcaseComponent } from './component/project-showcase/project-showcase.component';
import { VideoContestComponent } from './component/video-contest/video-contest.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/mainpage',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponentComponent,
    children: [
      {
        path: '',
        redirectTo: '/mainpage',
        pathMatch: 'full'
      },
      {
        path: 'mainpage',
        component:MainpageComponent,
        data: {
          title: 'Home-Screen'
        }
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        data: {
          title: 'Contact-us'
        }
      },
      {
        path: 'speaker',
        component: SpeakersComponent,
        data:{
          title: 'Speaker'
        }
      },
      {
        path: 'events',
        component: EventsComponent,
        data:{
          title: 'Events'
        }
      },
      {
        path: 'nationalHT',
        component: NationalHTComponent,
        data:{
          title: 'National Conclave'
        }
      },
      {
        path: 'registration',
        component:RegistrationComponent,
        data:{
          title: 'Registration'
        }
      },
      {
        path: 'about-us',
        component:AboutUsComponent,
        data:{
          title: 'About Us'
        }
      },
      {
        path: 'project-showcase',
        component:ProjectShowcaseComponent,
        data:{
          title: 'Project Showcase'
        }
      },
      {
        path: 'video-contest',
        component: VideoContestComponent,
        data:{
          title: 'Video Contest'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
