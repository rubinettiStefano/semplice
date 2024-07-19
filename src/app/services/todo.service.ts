import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ToDo } from '../model/ToDo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService 
{

  http:HttpClient = inject(HttpClient);//constructor(public http:HttpClient){}

  //quando utilizziamo http noi INCAPSULIAMO,WRAPPIAMO,BOXIAMO ciò che produciamo dentro un OBSERVABLE
  //un OBSERVABLE è l'evoluzione delle PROMISE
  //noi vogliamo lavorare sui dati solo quando li abbiamo, ma parlare con un altro server è una operazione ASINCRONA
  //vogliamo far proseguire il resto del programma, e , quando arriva la RESPONSE, attivare un metodo che la gestisca
  getAll():Observable<ToDo[]>
  {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos'); 
    //fai una request get a 'url' e trasforma il json che ti arriva come response in un ToDo[]     , in un vettore di ToDo
  }
}
