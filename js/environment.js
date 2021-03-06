const gameCanvas = document.querySelector("#game-canvas");
const context = gameCanvas.getContext("2d");
const GRAVITY = 2;
gameCanvas.width = innerWidth;
gameCanvas.height = 527;

class Background {
    constructor(image) {
        this.position = {
            x: -450,
            y: 0
        }
        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    renderBackground(){
        context.drawImage(this.image, this.position.x, this.position.y);  
    }
}