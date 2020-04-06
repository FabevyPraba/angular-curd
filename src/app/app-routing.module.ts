import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

import { EventListComponent } from './event-list/event-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GuestLecturesComponent } from './guest-lectures/guest-lectures.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  { path: 'students-list', component:StudentsListComponent },
  { path: 'students', component: StudentsListComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: 'student-update/:id', component: UpdateStudentComponent },
  { path: 'student-details/:id', component: StudentsDetailsComponent },
  { path: "event-list", component: EventListComponent},
  {	path: "reviews",component: ReviewsComponent},
  {	path: "guest-lectures",component: GuestLecturesComponent},
  { path: "create-event",component: CreateEventComponent},
  { path: 'event-update/:id', component: UpdateEventComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent, pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


