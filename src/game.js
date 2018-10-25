import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';
import { buildLevel, level1 } from './levels.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }
    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.bricks = buildLevel(this, level1);
        new InputHandler(this.paddle);
        this.gameObjects = [ this.paddle, this.ball, ...this.bricks ];
    }
    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
    }
    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}
