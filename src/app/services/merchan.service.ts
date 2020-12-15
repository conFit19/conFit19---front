import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MerchanService {

  // merchanList:Product[] = [];

  constructor(private http: HttpClient) {
    // this.merchanList = [
    //   {nombre: 'Gorra', precio: 15, id: '1',  foto: "../../../../assets/merchan/gorra.gif"},
    //   {nombre: 'Camiseta', precio: 20, id: '2',  foto:"../../../../assets/merchan/camiseta.jpg"},
    //   {nombre: 'Sudadera', precio:35, id: '3',  foto:"../../../../assets/merchan/sudadera.jpg"},
    //   {nombre: 'mascarilla', precio:5, id: '4',  foto:"../../../../assets/merchan/mascarilla.png"},
    // ]
   }
   showMerchan(){
    return this.http.get('http://localhost:3000/merchan/merchan');
  }
}

// export interface Product{
//   nombre: string, 
//   precio: number, 
//   id: string, 
//   foto: string,
// }
