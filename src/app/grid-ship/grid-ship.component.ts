import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-grid-ship',
    templateUrl: './grid-ship.component.html',
    styleUrls: ['./grid-ship.component.css']
})
export class GridShipComponent implements OnInit {

    @Input() hits;
    @Input() lifes;
    bigShip = [1, 2, 3];
    mediumShip = [1, 2];
    smallShip = [1];
    @Input() arrayBarquitos = [];
    @Input() currentTargetBackground;

    constructor() {
    }

    ngOnInit() {
    }

}

