import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToDo } from '../model/ToDo';

@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})
export class Comp3Component implements OnInit
{
  todoServ:TodoService = inject(TodoService);
  todos:ToDo[] = [];

  ngOnInit(): void 
  {
    console.log("PRIMA")
    this.todoServ.getAll() //qui ho il mio Observable<ToDo[]>
    .subscribe(
      toDosPresiDalBodyDellaResponse =>
      {
        console.log("Gestione response")
        this.todos = toDosPresiDalBodyDellaResponse;
        console.log("Provo a stampare qui la lista di todos");
        console.log(this.todos);
      }
    );

    console.log("resto del programma")
    
  }
  


}
