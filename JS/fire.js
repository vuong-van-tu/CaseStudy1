function Bullet(goc, luc, play) {
    const velocity = 10;
    this.x = play.x + 40;
    this.y = play.y + 10;
    this.dx = Math.cos(Math.PI * goc / 180) * velocity;//Lực
    this.dy = Math.sin(Math.PI * (180 + goc) / 180) * velocity;//Góc
    this.color = "black";
    this.radius = 5;
    this.gravity = 10 / luc;
    this.draw = function () {
        pen.beginPath();
        pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }
    this.update = function () {
        this.x += this.dx;
        this.y += this.dy;
        this.dy += this.gravity;
        this.draw();
    }
}



function gun() {

    let goc = +document.getElementById('goc').value;
    let luc = +document.getElementById('luc').value;

        let b = new Bullet(goc, luc, play1);
        b.draw();
        function f() {
            b.update();
            setTimeout(f, 10)
        }
        f();


}

