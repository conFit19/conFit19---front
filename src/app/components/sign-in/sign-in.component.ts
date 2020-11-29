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
      name: ['', Validators.required],
      familyName: ['', Validators.required],
      bornData: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
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



  // submit
  registrar(): void {

    let formularioLleno = this.FormSignIn.value;

    console.log(formularioLleno);
    
    this.FormSignIn.reset();
  }

}
