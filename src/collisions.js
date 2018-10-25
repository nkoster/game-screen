export function detectCollision(ball, gameObject) {

    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = leftSideOfObject + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if (
        bottomOfBall >= topOfPaddle &&
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x + ball.size <= rightSideOfObject) {
        return true;
    } else {
        return false;
    }
}