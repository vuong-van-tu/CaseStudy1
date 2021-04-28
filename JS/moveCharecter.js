class Character {
    constructor(pen, imgName, x, y) {
        this.pen = pen;
        this.image = new Image()
        this.image.src = imgName;
        this.x = x;
        this.y = y;
        this.speed = 1;
        this.blood = 50;
        this.anim = new Motivation(this.pen, this.image.src, 2, 6, this.x, this.y);
    }

    drawImg() {
        this.anim.drawImg();
    }

    displayBlood(number) {
        pen.fillStyle = 'red';
        pen.fillRect(this.x + 3, this.y - 10, number, 6);
    }


    moveRight() {
        this.x += this.speed;
        this.anim.image.src = this.image.src;
        this.anim.setPosition(this.x, this.y);
        this.anim.updateFrame();
        this.anim.drawImg();
    }

    moveLeft() {
        this.x -= this.speed;
        this.anim.image.src = this.image.src;
        this.anim.setPosition(this.x, this.y);
        this.anim.updateFrame();
        this.anim.drawImg();
    }
}

function moveCharecter(evt) {
    switch (evt.key) {
        case "ArrowLeft":
            play1.image.src = '../background/nv1_left.png';
            play1.moveLeft();
            break;
        case "ArrowRight":
            play1.image.src = '../background/nv1_right.jpg';
            play1.moveRight();
            break;
        case "a":
            play2.image.src = '../background/nv2_left.png';
            play2.moveLeft();
            break;
        case "d":
            play2.image.src = '../background/nv2_right.jpg';
            play2.moveRight();
            break;
    }
}

