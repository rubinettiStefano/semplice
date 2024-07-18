import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FiglioComponent } from "../figlio/figlio.component";

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [CommonModule, RouterLink, FiglioComponent],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component 
{
  listaColori:string[]=[
    // "#FF5733", // Rosso Arancio
    // "#33FF57", // Verde Chiaro
    "#3357FF", // Blu
    "#FF33A1", // Rosa
    // "#33FFF5", // Azzurro
    // "#FFBD33", // Giallo Arancio
    // "#8D33FF", // Viola
    // "#FF8C33", // Arancio
    "#33FFBD", // Verde Acqua
    // "#FF3333"  // Rosso
  ];

  pos:number=0;
  colore:string=this.listaColori[this.pos];
  pixel:number=16;

  grandezza()
  {
    return this.pixel+"px";
  }

  ciclacolori($event: WheelEvent) 
  {

    console.log($event)
   
    if($event.deltaY > 0)
    {
      console.log("aumento");
      this.pos++;
      if(this.pos==this.listaColori.length)
        this.pos=0;
      
      this.pixel+=4;
      
    }
    else
    {
      console.log("diminuisco")
      this.pos--;
      if(this.pos<0)
        this.pos=this.listaColori.length-1;

      this.pixel-=4;
      if(this.pixel<2)
        this.pixel=4;
    }
    
    console.log(this.pos);
  

    this.colore=this.listaColori[this.pos];
  }


  ilMioMotto:string = "SONO IL COMPONENTE PRIMIGENIO";

  getStringaCasuale():string
  {
    return "arrivederci"
  }

  cosaDaFareQuandoAvvieneClick()
  {
    alert("Bravissimo mi hai cliccato")
  }

  stampaEventoFiglio(payload:string)
  {
    alert(payload);
  }
}
