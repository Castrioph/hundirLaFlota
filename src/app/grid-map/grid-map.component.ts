import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-map',
  templateUrl: './grid-map.component.html',
  styleUrls: ['./grid-map.component.css']
})
export class GridMapComponent implements OnInit {

  title: string = 'Hundir la flota';

  // General vars
  top = [1, 2, 3, 4, 5];
  fieldColor: string = '#112dc0';


  constructor() {
  }

  ngOnInit() {
  }


}
