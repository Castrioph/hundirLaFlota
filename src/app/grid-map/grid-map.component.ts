import {Component, Input, OnInit} from '@angular/core';

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
  @Input() arrayBarquitos=[];
  currentTarget ;


  constructor() {
  }

  ngOnInit() {
  }

  changeColor(item){
    this.currentTarget = item;
    let id = item.attributes['id'].value
    id=id.split('ll');
    if(this.arrayBarquitos.includes(parseInt(id[1]))){
      item.style.backgroundColor= "#990e11"
    }else{
      item.style.backgroundColor= "#0f9899"
    }
  }

}



