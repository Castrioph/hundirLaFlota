import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-map',
  templateUrl: './grid-map.component.html',
  styleUrls: ['./grid-map.component.css']
})
export class GridMapComponent implements OnInit {

  constructor() {
    }

  ngOnInit() {
  }
  title: string = 'Hundir la flota';
  buttonText: string='tabla';
   createPuzzleLayout( ){
    let numeroPiezas=25;
    let raiz= Math.sqrt(numeroPiezas);
    let tabla="<table>";
    let anchuraCelda=50;
    let alturaCelda=50;
    let n = 0;
    for (var i = 0; i < raiz; i++) {
      tabla=tabla + "<tr>";
      for (var j = 0; j < raiz ; j++) {
        tabla=tabla+"<td style=\"border: solid 3px black; background-color: deepskyblue; width:"+anchuraCelda+"px; height:"+alturaCelda+"px;\" id=\"piece"+n+"\"></td>";
        n=n+1;
      }
      tabla=tabla+"</tr>";
    }
    tabla=tabla+"</table>";
    let body=document.getElementById("tablegrid");
    body.innerHTML=body.innerHTML+tabla;
  }
}
