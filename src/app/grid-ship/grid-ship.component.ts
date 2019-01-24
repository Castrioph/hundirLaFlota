import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-ship',
  templateUrl: './grid-ship.component.html',
  styleUrls: ['./grid-ship.component.css']
})
export class GridShipComponent implements OnInit {

  bigShip = [1,2,3];
  mediumShip = [1,2];
  smallShip = [1];
  constructor() { }

  ngOnInit() {
  }

}
