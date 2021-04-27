class Character {
    constructor(canvas, imgName, x, y) {
        this.canvas = canvas;
        this.pen = canvas.getContext('2d');
        this.imgName = imgName;
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.blood = 5;
        this.anim = new Motivation(this.canvas, this.imgName, 2, 6, this.x, this.y);
    }
    drawImg() {
        this.anim.drawImg();
    }
    moveRight1() {
        this.imgName = '../background/nv1_run.jpg';
        this.anim.image.src = this.imgName
        this.anim.setPosition(this.x, this.y);
        this.anim.updateFrame();
        this.anim.drawImg();
    }
    moveLeft1(){
        this.imgName = '../background/image666.png';
        this.anim.image.src = this.imgName
        this.anim.setPosition(this.x,this.y);
        this.anim.updateFrame();
        this.anim.drawImg();
    }

    moveRight2() {
        this.imgName = '../background/nv2_run.jpg';
        this.anim.image.src = this.imgName
        this.anim.setPosition(this.x, this.y);
        this.anim.updateFrame();
        this.anim.drawImg();
    }
    moveLeft2(){
        this.imgName = '../background/image (7).png';
        this.anim.image.src = this.imgName
        this.anim.setPosition(this.x,this.y);
        this.anim.updateFrame();
        this.anim.drawImg();
    }
}

function moveCharecter(evt) {
    switch (evt.keyCode) {
        case 37:
            pen.clearRect(0, 0, canvas.width, canvas.height);
            play1.x -= play1.speed;
            play1.moveLeft1();
            play2.drawImg();
            break;
        case 39:
            pen.clearRect(0, 0, canvas.width, canvas.height);
            play1.x += play1.speed;
            play1.moveRight1();
            play2.drawImg();
            break;
        case 65:
            pen.clearRect(0, 0, canvas.width, canvas.height);
            play2.x -= play2.speed;
            play2.moveLeft2();
            play1.drawImg();
            break;
        case 68:
            pen.clearRect(0, 0, canvas.width, canvas.height);
            play2.x += play2.speed;
            play2.moveRight2();
            play1.drawImg();
            break;
    }
}
