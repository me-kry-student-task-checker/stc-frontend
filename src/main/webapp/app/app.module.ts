import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { StchFrontendSharedModule } from 'app/shared/shared.module';
import { StchFrontendCoreModule } from 'app/core/core.module';
import { StchFrontendAppRoutingModule } from './app-routing.module';
import { StchFrontendHomeModule } from './home/home.module';
import { StchFrontendEntityModule } from './entities/entity.module';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ErrorComponent } from './layouts/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './layouts/courses/courses.component';
import { NewcourseComponent } from './layouts/newcourse/newcourse.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditcourseComponent } from './layouts/editcourse/editcourse.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StchFrontendSharedModule,
    StchFrontendCoreModule,
    StchFrontendHomeModule,
    StchFrontendEntityModule,
    StchFrontendAppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    FooterComponent,
    CoursesComponent,
    NewcourseComponent,
    EditcourseComponent,
  ],
  bootstrap: [MainComponent],
})
export class StchFrontendAppModule {}
