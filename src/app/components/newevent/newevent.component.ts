import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {

  FormNewEvent: FormGroup;
  newEvent: any = {};



  constructor(private formConstructor: FormBuilder, private newEventservice: EventService, private router: Router) { 
    this.formEvent();
  }

  ngOnInit(): void {
  }

  formEvent(): void {
    this.FormNewEvent = this.formConstructor.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      description: ['', [Validators.required,Validators.minLength(2)]],
      place: ['', Validators.required],
      capacity: ['', Validators.required],
      age:['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      type: ['', Validators.required],
      day: ['', Validators.required],
      UserId: [Number(sessionStorage.getItem('id'))]
    })
  }

  // validations

  get invalidName():boolean {
    return this.FormNewEvent.get('name').invalid && this.FormNewEvent.get('name').touched;
  } 
  get validName():boolean {
    return this.FormNewEvent.get('name').valid && this.FormNewEvent.get('name').touched;
  }
  get invalidDescription():boolean {
    return this.FormNewEvent.get('description').invalid && this.FormNewEvent.get('description').touched;
  } 
  get validDescription():boolean {
    return this.FormNewEvent.get('description').valid && this.FormNewEvent.get('description').touched;
  }
  get invalidCapacity():boolean {
    return this.FormNewEvent.get('capacity').invalid && this.FormNewEvent.get('capacity').touched;
  } 
  get validCapacity():boolean {
    return this.FormNewEvent.get('capacity').valid && this.FormNewEvent.get('capacity').touched;
  }
  get invalidHour():boolean {
    return this.FormNewEvent.get('time').invalid && this.FormNewEvent.get('time').touched;
  } 
  get validHour():boolean {
    return this.FormNewEvent.get('time').valid && this.FormNewEvent.get('time').touched;
  }
  get invalidDuration():boolean {
    return this.FormNewEvent.get('duration').invalid && this.FormNewEvent.get('duration').touched;
  } 
  get validDuration():boolean {
    return this.FormNewEvent.get('duration').valid && this.FormNewEvent.get('duration').touched;
  }
  get invalidDay():boolean {
    return this.FormNewEvent.get('day').invalid && this.FormNewEvent.get('day').touched;
  } 
  get validDay():boolean {
    return this.FormNewEvent.get('day').valid && this.FormNewEvent.get('day').touched;
  }
  get invalidAge():boolean {
    return this.FormNewEvent.get('age').invalid && this.FormNewEvent.get('age').touched;
  } 
  get validAge():boolean {
    return this.FormNewEvent.get('age').valid && this.FormNewEvent.get('age').touched;
  }


  createEvent(){

    let formularioLleno = this.FormNewEvent.value;

    console.log(formularioLleno);

    this.newEventservice.addNewEvent(formularioLleno)
    .subscribe((data: any) => {
      this.newEvent = data;
      console.log(this.newEvent);
      this.router.navigateByUrl('/organizador')
      alert('evento creado');
    }, error => {
      alert(`Error al rellenar el formulario`);
    })
  }
}
