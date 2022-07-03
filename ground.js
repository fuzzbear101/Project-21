class ground {
    constructor(x,y,width,height) {
        this.x = x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
      }
}