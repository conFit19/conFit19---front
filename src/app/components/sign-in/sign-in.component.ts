import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SigninService } from 'src/app/services/signin.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  FormSignIn: FormGroup
  newUser: any = {};

  constructor(private formConstructor: FormBuilder, private signinservice: SigninService) { 
    this.formInputs();
  }

  ngOnInit(): void {
  }

  formInputs(): void {
    this.FormSignIn = this.formConstructor.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      familyName: ['', [Validators.required,Validators.minLength(2)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      bornDate: ['', Validators.required],
      city: ['', Validators.required],
      email: ['',[ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', Validators.required],
      rol: ['', Validators.required]
    })
  }

  // validations

  get invalidName():boolean {
    return this.FormSignIn.get('name').invalid && this.FormSignIn.get('name').touched;
  } 
  get validName():boolean {
    return this.FormSignIn.get('name').valid && this.FormSignIn.get('name').touched;
  }
  get invalidFamilyName():boolean {
    return this.FormSignIn.get('familyName').invalid && this.FormSignIn.get('familyName').touched;
  } 
  get validFamilyName():boolean {
    return this.FormSignIn.get('familyName').valid && this.FormSignIn.get('familyName').touched;
  }
  get invalidPassword():boolean {
    return this.FormSignIn.get('password').invalid && this.FormSignIn.get('password').touched;
  } 
  get validPassword():boolean {
    return this.FormSignIn.get('password').valid && this.FormSignIn.get('password').touched;
  }
  get invalidData():boolean {
    return this.FormSignIn.get('bornDate').invalid && this.FormSignIn.get('bornDate').touched;
  } 
  get validData():boolean {
    return this.FormSignIn.get('bornDate').valid && this.FormSignIn.get('bornDate').touched;
  }
  get invalidCity():boolean {
    return this.FormSignIn.get('city').invalid && this.FormSignIn.get('city').touched;
  } 
  get validCity():boolean {
    return this.FormSignIn.get('city').valid && this.FormSignIn.get('city').touched;
  }
  get invalidEmail():boolean {
    return this.FormSignIn.get('email').invalid && this.FormSignIn.get('email').touched;
  } 
  get validEmail():boolean {
    return this.FormSignIn.get('email').valid && this.FormSignIn.get('email').touched;
  }
  get invalidPhone():boolean {
    return this.FormSignIn.get('phone').invalid && this.FormSignIn.get('phone').touched;
  } 
  get validPhone():boolean {
    return this.FormSignIn.get('phone').valid && this.FormSignIn.get('phone').touched;
  }


  // submit
  registrar(): void {

    let formularioLleno = this.FormSignIn.value;

    console.log(formularioLleno);
    
    // this.FormSignIn.reset();

    this.signinservice.addNewUser(formularioLleno)
      .subscribe((data: any) => {
        this.newUser = data;
        console.log(this.newUser);
      }, error => {
        alert(`Error al rellenar el formulario`)
      })
  } 
}
