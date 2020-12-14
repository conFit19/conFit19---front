import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MerchandisingComponent } from './components/merchandising/merchandising.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {InfoComponent} from './components/info/info.component';
import {LogInComponent} from './components/log-in/log-in.component';



const routes: Routes = [
  {path: 'registro', component: SignInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'merchandising', component: MerchandisingComponent},
  {path: 'navbar', component:NavbarComponent},
  {path:'info', component:InfoComponent},
  {path: 'navbar/info',component:InfoComponent},
  {path:'log-in', component:LogInComponent},
  {path:'navbar/log-in', component:LogInComponent},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
