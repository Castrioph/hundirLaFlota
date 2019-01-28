import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
    selector: 'app-grid-map',
    templateUrl: './grid-map.component.html',
    styleUrls: ['./grid-map.component.css']
})
export class GridMapComponent implements OnInit {

    title: string = 'Hundir la flota';

    // General vars
    @Input() hits;
    @Input() lifes;
    top = [1, 2, 3, 4, 5];
    fieldColor: string = '#112dc0';
    @Input() arrayBarquitos = [];
    @Output() shootMap: EventEmitter<any> = new EventEmitter();
    @Output() hitted : EventEmitter<any> = new EventEmitter();
    @Output() missed : EventEmitter<any> = new EventEmitter();





    constructor() {
    }

    ngOnInit() {
    }

    mapChangeColor(item) {
        let id = item.attributes['id'].value;
        id = id.split('ll');
        if (this.arrayBarquitos.includes(parseInt(id[1]))) {
            item.style.backgroundColor = "#990e11";
            this.hitted.emit(this.hits);
        } else {
            item.style.backgroundColor = "#0f9899"
           this.missed.emit(this.lifes);
        }
        this.shootMap.emit(item);
    }
}



