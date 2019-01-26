import {Component} from '@angular/core';
import {gameConstants} from './constants/gameConstants';
import {doesNotThrow} from "assert";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'hundirLaFlota';
    grid: boolean = false;
    buttonText: string = 'Iniciar juego';


    // Function to get boat orientation
    boatOrientation() {
        let orientation;
        let random = Math.round(Math.random());
        if (random === 0) {
            orientation = gameConstants.ORIENTATION_TO_UP_AND_DOWN;
        } else {
            orientation = gameConstants.ORIENTATION_TO_LEFT_AND_RIGHT;
        }
        return orientation;
    }

    // Funciton to get boat position
    boatPosition() {
        let position = Math.round(Math.random() * 24);
        let cell = document.getElementById('cell ' + position);
        return cell;
    }


    // Function to get boat direction
    boatDirection(orientation) {
        let direction;
        if (orientation === gameConstants.ORIENTATION_TO_UP_AND_DOWN) {
            let random = Math.round(Math.random());
            if (random === 0) {
                direction = gameConstants.DIRECTION_TO_UP;
            } else {
                direction = gameConstants.DIRECTION_TO_DOWN;
            }
        } else if (orientation === gameConstants.ORIENTATION_TO_LEFT_AND_RIGHT) {
            let random = Math.round(Math.random());
            if (random === 0) {
                direction = gameConstants.DIRECTION_TO_RIGHT;
            } else {
                direction = gameConstants.DIRECTION_TO_LEFT;
            }
        }
        return direction;
    }


    //Function to check movement
    checkMovement(cell, direction, nPieces, arrayBarquitos) {
        let row = 0;
        if (direction === gameConstants.DIRECTION_TO_UP) {
            for (let i = nPieces; i <= 0; i--) {
                if ((cell - 5) < 0) {
                    return false;
                } else if (arrayBarquitos.include(cell)) {
                    return false;
                } else {
                    cell = cell - 5;
                }
            }
            return true;
        } else if (direction === gameConstants.DIRECTION_TO_DOWN) {
            for (let i = nPieces; i <= 0; i--) {
                if ((cell + 5) > 24) {
                    return false;
                } else if (arrayBarquitos.include(cell)) {
                    return false;


                } else {
                    cell = cell + 5;
                }
            }
            return true;
        } else if (direction === gameConstants.DIRECTION_TO_RIGHT) {
            row = cell / 5;
            if (cell + (nPieces - 1) / 5 > row) {
                return false;
            } else if (arrayBarquitos.include(cell)) {
                return false;

            } else {
                return true;
            }
        } else if (direction === gameConstants.DIRECTION_TO_LEFT) {
            row = cell / 5;
            if (cell - (nPieces - 1) / 5 > row) {
                return false;
            }
        } else {
            return true;
        }
    }
}


       



