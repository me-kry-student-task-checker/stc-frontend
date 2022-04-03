import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { StchFrontendSharedModule } from 'app/shared/shared.module';
import { StchFrontendCoreModule } from 'app/core/core.module';
import { StchFrontendAppRoutingModule } from './app-routing.module';
import { StchFrontendHomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ErrorComponent } from './layouts/error/error.component';
import { NewTaskComponent } from 'app/layouts/tasks/newTask.component';
import { TasksListComponent } from 'app/layouts/tasks/tasksList.component';
import {TaskComponent} from 'app/layouts/tasks/task.component';
import { CourseListComponent } from './layouts/courses/course-list/courseList.component';
import { NewCourseComponent } from './layouts/courses/course-new/newCourse.component';
import { EditCourseComponent } from './layouts/courses/course-edit/editCourse.component';
import { CourseDeleteComponent } from 'app/layouts/courses/course-delete/courseDelete.component';
import { CourseComponent } from 'app/layouts/courses/course/course.component';
import { CourseInviteComponent } from "app/layouts/courses/course-invite/courseInvite.component";
import {MatCheckboxModule} from "@angular/material/checkbox";

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
        MatButtonToggleModule,
        MatCheckboxModule,
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
    TaskComponent,
    CourseInviteComponent,
  ],
  bootstrap: [MainComponent],
})
export class StchFrontendAppModule {}
