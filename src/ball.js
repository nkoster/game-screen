export default class Ball {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.image = document.getElementById('ball');
        this.speed = { x: 2, y: 3 };
        this.position = { x: 100, y: 10 };
        this.size = 16;
    }
    draw(ctx) {
        ctx.drawImage(this.image,
            this.position.x, this.position.y,
            this.size, this.size);
    }
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        // left or right wall collision
        if (this.position.x < 0 || this.position.x > this.gameWidth - this.size)
            this.speed.x = -this.speed.x;
        // top or bottom wall collision
        if (this.position.y < 0 || this.position.y > this.gameHeight- this.size)
            this.speed.y = -this.speed.y;
        // paddle collision
        let bottomOfBall = this.position.y + this.size;
        let topOfPaddle = this.game.paddle.position.y;
        let leftSideOfPaddle = this.game.paddle.position.x;
        let rightSideOfPaddle = leftSideOfPaddle + this.game.paddle.width;
        if (bottomOfBall >= topOfPaddle &&
            this.position.x >= leftSideOfPaddle &&
            this.position.x + this.size <= rightSideOfPaddle) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}
