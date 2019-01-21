import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hundirLaFlota';

  // CONSTANTES PARA LA ORIENTACIÓN DE LOS BARCOS
  ORIENTATION_TO_UP_AND_DOWN : number = 0;
  ORIENTATION_TO_LEFT_AND_RIGHT : number = 1;

  //CONSTANTES PARA LA DIRECCIÓN DE LOS BARCOS ORIENTADOS VERTICALMENTE
  DIRECTION_TO_UP : number = 0;
  DIRECTION_TO_DOWN : number = 1;

  //CONSTANTES PARA LA DIRECCIÓN DE LOS BARCOS HORIENTADOS HORIZONTALMENTE
  DIRECTION_TO_RIGHT : number = 0;
  DIRECTION_TO_LEFT : number = 1;
}


