import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [{ path: 'about/:id', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'detail/:id', component: HeroDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
