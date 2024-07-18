import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  standalone: true,
  imports: [],
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.css'
})
export class FiglioComponent 
{
  @Input() valoreDiMioPadre!:string;
  @Output() avvertitorePadreEvent:EventEmitter<string> = new EventEmitter<string>();

  propagaEvento()
  {
    this.avvertitorePadreEvent.emit("Ciao Papà");
  }
}
