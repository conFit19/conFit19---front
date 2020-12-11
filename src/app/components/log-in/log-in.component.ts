import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from '../../models/user-interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  
  user: UserInterface = new UserInterface();

  constructor(private auth: AuthService,
              private router: Router) {
    
   }

  ngOnInit(): void {
  }

  acceder(data: NgForm):void{

    const loginResult = this.auth.login(this.user);
   
    if(loginResult){
      this.router.navigateByUrl('/home');
    }else{
      alert('usuario o contraseña incorrectos');
    }
    console.log(loginResult);
  }
  

  }

