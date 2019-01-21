//Function to get boat orientation
function boatOrientation() {
    let orientation = '';
    let random = Math.round(Math.random());
    if (random === 0) {
        orientation = horizontal;
    } else {
        orientation = vertical;
    }
    return orientation;
}
//Funciton to get boat position
function boatPosition() {
    let position = Math.round(Math.random() * 24);
    let cell= document.getElementById('piece' + position);
    return cell;
}

//Function to get boat direction
function boatDirection() {
    let direction = '';
    let random = Math.round(Math.random());
    if (random === 0) {
        direction = right;
    } else {
        direction = left;
    }
    return direction;
}

