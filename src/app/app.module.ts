import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CourseComponent } from './course/course.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Test1Component } from './test1/test1.component';
import { Test1DetailComponent } from './test1-detail/test1-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeroesComponent,
    CourseComponent,
    HeroDetailComponent,
    Test1Component,
    Test1DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
