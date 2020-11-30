import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  FormSignIn: FormGroup

  constructor(private formConstructor: FormBuilder) { 
    this.formInputs();
  }

  ngOnInit(): void {
  }

  formInputs(): void {
    this.FormSignIn = this.formConstructor.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      familyName: ['', [Validators.required,Validators.minLength(2)]],
      bornData: ['', Validators.required],
      city: ['', Validators.required],
      email: ['',[ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', Validators.required, Validators.pattern('^[0-9]{2,3}-? ?[0-9]{6,7}$')],
      type: ['', Validators.required]
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
  get invalidData():boolean {
    return this.FormSignIn.get('bornData').invalid && this.FormSignIn.get('bornData').touched;
  } 
  get validData():boolean {
    return this.FormSignIn.get('bornData').valid && this.FormSignIn.get('bornData').touched;
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
    
    this.FormSignIn.reset();
  }

}
