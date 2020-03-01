import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomeTestimonialSlideComponent } from './home-testimonial-slide/home-testimonial-slide.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBannerComponent,
    HomeBodyComponent,
    HomeTestimonialSlideComponent,
    HomeTeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
