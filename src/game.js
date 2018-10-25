import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }
    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.bricks = [];
        for (let i = 0; i < 10; i++) {
            this.bricks.push(new Brick(this, { x: i*52, y: 30 }));
        }
        new InputHandler(this.paddle);
        this.gameObjects = [ this.paddle, this.ball, ...this.bricks ];
    }
    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
    }
    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}
