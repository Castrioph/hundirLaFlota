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
    arrayBarquitos = [];


    // Function to get boat orientation
    boatOrientation() {
        let orientation;
        let random = Math.round(Math.random());
        if (random == 0) {
            orientation = gameConstants.ORIENTATION_TO_UP_AND_DOWN;
        } else {
            orientation = gameConstants.ORIENTATION_TO_LEFT_AND_RIGHT;
        }
        return orientation;
    }

    // Funciton to get boat position
    boatPosition() {
        let position = Math.round(Math.random() * 24);
        return position;
    }


    // Function to get boat direction
    boatDirection(orientation) {
        let direction;
        if (orientation == gameConstants.ORIENTATION_TO_UP_AND_DOWN) {
            let random = Math.round(Math.random());
            if (random == 0) {
                direction = gameConstants.DIRECTION_TO_UP;
            } else {
                direction = gameConstants.DIRECTION_TO_DOWN;
            }
        } else if (orientation == gameConstants.ORIENTATION_TO_LEFT_AND_RIGHT) {
            let random = Math.round(Math.random());
            if (random == 0) {
                direction = gameConstants.DIRECTION_TO_RIGHT;
            } else {
                direction = gameConstants.DIRECTION_TO_LEFT;
            }
        }
        return direction;
    }


    //Function to check movement
    checkMovement(cell, orientation, direction, nPieces, arrayBarquitos) {
        let row = 0;
        let auxiliarBarquitos = [];
        if (orientation == gameConstants.ORIENTATION_TO_UP_AND_DOWN) {
            if (direction == gameConstants.DIRECTION_TO_UP) {
                for (let i = nPieces; i > 0; i--) {
                    if ((cell - 5) < 0) {
                        return false;
                    } else if (arrayBarquitos.includes(cell)) {
                        return false;
                    } else {
                        auxiliarBarquitos.push(cell);
                        cell = cell - 5;

                    }
                }
                arrayBarquitos = arrayBarquitos.concat(auxiliarBarquitos);
            } else if (direction == gameConstants.DIRECTION_TO_DOWN) {
                for (let i = nPieces; i > 0; i--) {
                    if ((cell + 5) > 24) {
                        return false;
                    } else if (arrayBarquitos.includes(cell)) {
                        return false;


                    } else {
                        auxiliarBarquitos.push(cell);
                        cell = cell + 5;
                    }
                }
                arrayBarquitos = arrayBarquitos.concat(auxiliarBarquitos);
            }
        } else {
            if (direction == gameConstants.DIRECTION_TO_RIGHT) {
                row = cell / 5;
                for (let i = nPieces; i >= 0; i--) {
                    if (cell / 5 != row) {
                        return false;
                    } else if (arrayBarquitos.includes(cell)) {
                        return false;

                    } else {
                        auxiliarBarquitos.push(cell);
                        cell = cell + 1;
                    }

                }
                arrayBarquitos = arrayBarquitos.concat(auxiliarBarquitos);
            } else if (direction == gameConstants.DIRECTION_TO_LEFT) {
                row = cell / 5;
                for (let i = nPieces; i > 0; i--) {
                    if (cell / 5 != row) {
                        return false;
                    } else if (arrayBarquitos.includes(cell)) {
                        return false;

                    } else {
                        auxiliarBarquitos.push(cell);
                        cell = cell - 1;
                    }

                }
                arrayBarquitos = arrayBarquitos.concat(auxiliarBarquitos);
            }
        }
        return arrayBarquitos;
    }

    runGame() {
        let prop = false;
        let cell = this.boatPosition();
        let orientation = this.boatOrientation();
        let direction = this.boatDirection(orientation);

        while (!prop) {
            let act = this.checkMovement(cell, orientation, direction, 3, this.arrayBarquitos);
            cell = this.boatPosition();
            orientation = this.boatOrientation();
            direction = this.boatDirection(orientation);
            if (act != false) {
                prop = true;
                this.arrayBarquitos = act;
            }
        }

        prop = false;

        while (!prop) {
            let act = this.checkMovement(cell, orientation, direction, 2, this.arrayBarquitos);
            cell = this.boatPosition();
            orientation = this.boatOrientation();
            direction = this.boatDirection(orientation);
            if (act != false) {
                prop = true;
                this.arrayBarquitos = act;
            }
        }

        for(let i=0; i<2; i++){
            prop = false;
            while (!prop) {
                let act = this.checkMovement(cell, orientation, direction, 1, this.arrayBarquitos);
                cell = this.boatPosition();
                orientation = this.boatOrientation();
                direction = this.boatDirection(orientation);
                if (act != false) {
                    prop = true;
                    this.arrayBarquitos = act;
                }
            }
        }
        console.log(this.arrayBarquitos);
    }
}





