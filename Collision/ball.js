//function which creates the ball that the player controls
function Ball(loc, vel, rad, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  //this function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
//lerp - ball falls after the mouse
  this.update = function(){
    var mouseLoc = createVector(mouseX, mouseY)
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .1)
  }
  //checkEdges() reverses speed when the ball touches an edge
  //keeps the ball from going off the canvas
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, rad, rad);
  }
}
