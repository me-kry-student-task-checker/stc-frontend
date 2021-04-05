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
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StchFrontendSharedModule,
    StchFrontendCoreModule,
    StchFrontendHomeModule,
    StchFrontendEntityModule,
    StchFrontendAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, FooterComponent, CoursesComponent],
  bootstrap: [MainComponent],
})
export class StchFrontendAppModule {}
