import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { StchFrontendSharedModule } from 'app/shared/shared.module';
import { StchFrontendCoreModule } from 'app/core/core.module';
import { StchFrontendAppRoutingModule } from './app-routing.module';
import { StchFrontendHomeModule } from './home/home.module';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ErrorComponent } from './layouts/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './layouts/courses/courseList.component';
import { NewCourseComponent } from './layouts/courses/newCourse.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditCourseComponent } from './layouts/courses/editCourse.component';
import { CourseDeleteComponent } from 'app/layouts/courses/courseDelete.component';
import { CourseComponent } from 'app/layouts/courses/course.component';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from 'app/layouts/courses/tasks/newTask.component';
import { TasksListComponent } from 'app/layouts/courses/tasks/tasksList.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StchFrontendSharedModule,
    StchFrontendCoreModule,
    StchFrontendHomeModule,
    StchFrontendAppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatTableModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    FooterComponent,
    CourseListComponent,
    NewCourseComponent,
    EditCourseComponent,
    CourseDeleteComponent,
    CourseComponent,
    NewTaskComponent,
    TasksListComponent,
  ],
  bootstrap: [MainComponent],
})
export class StchFrontendAppModule {}
