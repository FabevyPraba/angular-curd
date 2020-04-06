import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UserService } from './service/user.service';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

import { ReviewsComponent } from './reviews/reviews.component';
import { GuestLecturesComponent } from './guest-lectures/guest-lectures.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AppConfig } from './config/appconfig';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    StudentsListComponent,
    StudentsDetailsComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ReviewsComponent,
    GuestLecturesComponent,
    CreateEventComponent,
    EventDetailsComponent,
    UpdateEventComponent,
    EventListComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ UserService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
