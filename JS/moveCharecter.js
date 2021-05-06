class Character {
    constructor(pen, imgName, x, y) {
        this.pen = pen;
        this.image = new Image()
        this.image.src = imgName;
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.blood = 50;
        this.weapon = [];
        this.anim = new Motivation(this.pen, this.image.src, 2, 6, this.x, this.y);
        this.fire1 = function (player) {
            let goc = +document.getElementById('goc1').value;
            let luc = +document.getElementById('luc1').value;
            let b = new Bullet(goc, luc, this.x, this.y);
            this.weapon.push(b);


        }
        this.fire2 = function (player) {
            let goc = +document.getElementById('goc2').value;
            let luc = +document.getElementById('luc2').value;
            let b = new Bullet(180 - goc, luc, this.x, this.y);
            this.weapon.push(b);
        }

    }

    drawImg() {
        this.anim.drawImg();
    }

    displayBlood() {
        this.pen.beginPath();
        this.pen.stroke.style='black';
        this.pen.rect(this.x + 3, this.y - 10, this.blood, 6);
        this.pen.fillStyle = 'red';
        this.pen.fill();
        this.pen.stroke();

        // this.pen.beginPath();
        // this.pen.strokeStyle = 'black';
        // this.pen.rect(this.x + 40, this.y + 20,this.blood , 5);
        // this.pen.fillStyle = 'red';
        // this.pen.fill();
        // this.pen.stroke();
    }

    checkBlood() {
        if (this.blood > 0) {
            return true;
        } else {
            return false;
        }
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
        case "a":
            play1.image.src = '../background/nv1_left.png';
            play1.moveLeft();
            break;
        case "d":
            play1.image.src = '../background/nv1_right.png';
            play1.moveRight();
            break;
        case "ArrowLeft":
            play2.image.src = '../background/nv2_left.png';
            play2.moveLeft();
            break;
        case "ArrowRight":
            play2.image.src = '../background/nv2_right.png';
            play2.moveRight();
            break;
        case " " :
            play1.fire1();
            break;
        case "Enter":
            play2.fire2();
            break;
        case "h":
            let g1c = document.getElementById('goc1')
            g1c.value = +g1c.value + 10
            break;
        case "k":
            let l1c = document.getElementById('luc1')
            l1c.value = +l1c.value + 10
            break;
        case "j":
            let g1g = document.getElementById('goc1')
            g1g.value = +g1g.value - 10
            break;
        case "l":
            let l1g = document.getElementById('luc1')
            l1g.value = +l1g.value - 10
            break;
        case "End":
            let g2c = document.getElementById('goc2')
            g2c.value = +g2c.value + 10
            break;
        case "PageDown":
            let l2c = document.getElementById('luc2')
            l2c.value = +l2c.value + 10
            break;
        case "ArrowDown":
            let g2g = document.getElementById('goc2')
            g2g.value = +g2g.value - 10
            break;
        case "Clear":
            let l2g = document.getElementById('luc2')
            l2g.value = +l2g.value - 10
            break;

    }
}

