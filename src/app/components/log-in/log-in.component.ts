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

  constructor(private authService: AuthService,private router: Router) { }
  private user:UserInterface = {
    User:"",
    contrasena:""

  };

  ngOnInit(): void {
  }
  onLogin(){
    return this.authService
    .loginuser(this.user.User, this.user.contrasena)
    .subscribe(data =>{
      this.authService.setUser(data.user)
      let token =data.id;
      this.authService.setToken(token);
      this.router.navigate(['/home'])


    },
    error => console.log(error)
    );
  }
  

  }

