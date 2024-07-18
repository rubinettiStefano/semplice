import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component implements OnDestroy,OnInit
{
  ngOnDestroy(): void 
  {
    alert("Torna presto");
  }

  constructor()
  {
    this.a = 11;
  }

  ngOnInit(): void {
      this.a=22;
  }

  a:number=0;


  
  getNumeroCasuale():number
  {
    return Math.random()*101;
  }
}
