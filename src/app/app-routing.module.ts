import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MerchandisingComponent } from './components/merchandising/merchandising.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'registro', component: SignInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'merchandising', component: MerchandisingComponent},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
