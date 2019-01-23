import {Component} from '@angular/core';
import {gameConstants} from './constants/gameConstants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'hundirLaFlota';


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
        let cell = document.getElementById('piece' + position);
        return cell;
    }

    // Function to get boat direction
    boatDirection(orientation) {
        let direction;
        if (orientation===gameConstants.ORIENTATION_TO_UP_AND_DOWN){
          let random = Math.round(Math.random());
            if (random === 0) {
                direction = gameConstants.DIRECTION_TO_UP;
            } else {
                direction=gameConstants.DIRECTION_TO_DOWN;
            }
        }
        else if (orientation===gameConstants.ORIENTATION_TO_LEFT_AND_RIGHT){
            let random = Math.round(Math.random());
            if (random === 0) {
                direction = gameConstants.DIRECTION_TO_RIGHT;
            } else {
                direction=gameConstants.DIRECTION_TO_LEFT;
            }
        }
        return direction;
    }

    //Function to check movement
    checkMovement(cell,direction,nPieces){
        let movement =undefined;
        if (direction===gameConstants.DIRECTION_TO_UP){
            for (let i=nPieces; i<=0; i--){
                if (cell-10<0){
                    movement=false;
                } else {

                }
            }
            if ()
        }
    }
    // Function to paint the boat
      boatprint(position, imgUrl){

      }
}



