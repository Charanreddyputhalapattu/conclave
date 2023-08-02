import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SpeakersComponent } from './component/speakers/speakers.component';
import { EventsComponent } from './component/events/events.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NationalHTComponent } from './component/national-ht/national-ht.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ProjectShowcaseComponent } from './component/project-showcase/project-showcase.component';
import { VideoContestComponent } from './component/video-contest/video-contest.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    NavbarComponent,
    MainpageComponent,
    MainComponentComponent,
    ContactUsComponent,
    SpeakersComponent,
    EventsComponent,
    NationalHTComponent,
    RegistrationComponent,
    AboutUsComponent,
    ProjectShowcaseComponent,
    VideoContestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
