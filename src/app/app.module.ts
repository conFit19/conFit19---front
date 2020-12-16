import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MerchandisingComponent } from './components/merchandising/merchandising.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { InfoComponent } from './components/info/info.component';
import { PresencialesComponent } from './components/presenciales/presenciales.component';
import { HttpClientModule } from '@angular/common/http';
import { OnlineComponent } from './components/online/online.component';
import { NeweventComponent } from './components/newevent/newevent.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OrganizatorAreaComponent } from './components/organizator-area/organizator-area.component';
import { EventHomeComponent } from './components/event-home/event-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    MerchandisingComponent,
    NavbarComponent,
    LogInComponent,
    InfoComponent,
    PresencialesComponent,
    OnlineComponent,
    NeweventComponent,
    FooterComponent,
    ContactUsComponent,
    OrganizatorAreaComponent,
    EventHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
