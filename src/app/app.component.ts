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
        let orientation = 0;
        let random = Math.round(Math.random());
        if (random === 0) {
            orientation = gameConstants.ORIENTATION_TO_LEFT_AND_RIGHT;
        } else {
            orientation = gameConstants.ORIENTATION_TO_UP_AND_DOWN;
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
        let direction =0;
        if (orientation === gameConstants.ORIENTATION_TO_UP_AND_DOWN) {
            direction
        }
    }
    // Function to paint the boat
      boatprint(position, imgUrl){

      }
}



