function Bullet(goc, luc,x,y,name) {
    const velocity = 10;
    this.x = x + 40;
    this.y = y + 10;
    this.name = name;
    this.dx = Math.cos(Math.PI * goc / 180) * velocity;//Lực
    this.dy = Math.sin(Math.PI * (180 + goc) / 180) * velocity;//Góc
    // this.color = "black";
    // this.radius = 10;
    this.gravity = 10 / luc;
    this.draw = function () {
        // pen.beginPath();
        // pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // pen.fillStyle = this.color;
        // pen.fill();
        // pen.closePath();
        let img = document.getElementById('bullet');
        pen.drawImage(img);
    }
    this.update = function () {
        this.x += this.dx;
        this.y += this.dy;
        this.dy += this.gravity;
        this.draw();
    }

}


// let turn = 0;
// function gun() {
//     turn++;
//     let goc = +document.getElementById('goc').value;
//     let luc = +document.getElementById('luc').value;
//     if (turn % 2) {
//         let b = new Bullet(goc, luc, play1);
//         b.draw();
//         function f1() {
//
//             b.update();
//             // checkPlayer2Alive();
//             setTimeout(f1, 30)
//         }
//
//         f1();
//     } else {
//         let c = new Bullet(180 - goc, luc, play2);
//         c.draw();
//
//         function f2() {
//             c.update();
//             setTimeout(f2, 30);
//         }
//
//         f2();
//     }
//
// }


