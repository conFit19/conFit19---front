import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }


   // show or hide
   get isLogged():boolean {
    return sessionStorage.getItem('rol')!=='Admin' && sessionStorage.getItem('rol')!=='User'
  } 

  get isNotLogged():boolean {
    return sessionStorage.getItem('rol')==='Admin' || sessionStorage.getItem('rol')==='User'
  } 

  // get isNotLogged():boolean{

  // }
  // isAdmin():boolean {

  // }

  goToYourArea(){
    if( sessionStorage.getItem('rol')=== 'Admin'){
      this.router.navigateByUrl('/organizador')
    }else if( sessionStorage.getItem('rol')==='User'){
      this.router.navigateByUrl('/usuario')
    }else{
      this.router.navigateByUrl('/login')
    }
  }

  logOut(){
    sessionStorage.clear();
    this.router.navigateByUrl('/home')
  }
}
