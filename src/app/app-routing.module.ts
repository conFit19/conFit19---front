import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MerchandisingComponent } from './components/merchandising/merchandising.component';
import { OnlineComponent } from './components/online/online.component';
import { PresencialesComponent } from './components/presenciales/presenciales.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { NeweventComponent } from './components/newevent/newevent.component';



const routes: Routes = [
  {path: 'registro', component: SignInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'merchandising', component: MerchandisingComponent},
  {path: 'info', component: InfoComponent},
  {path: 'login', component: LogInComponent},
  {path: 'presenciales', component: PresencialesComponent},
  {path: 'online', component: OnlineComponent},
  {path: 'newevent', component: NeweventComponent},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
