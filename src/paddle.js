export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 150;
        this.height = 20;
        this.maxSpeed = 10;
        this.speed = 0;
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    }
    draw(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(this.position.x, this.position.y,
            this.width, this.height)
    }
    moveLeft() {
        if (this.position.x > 0) {
            this.position.x -= 5
        }
    }
    moveRight() {
        if (this.position.x < this.gameWidth - this.width) {
            this.position.x += 5
        }
    }
    update(deltaTime) {
        // if (!deltaTime) return;
        // this.position.x += 5 / deltaTime;
    }
}
