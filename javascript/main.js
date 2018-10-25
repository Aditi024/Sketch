var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    W = canvas.width = "1000",
    H = canvas.height = "500",
    mouseX,
    mouseY,
    lastMouseX,
    lastMouseY,
    angle = 0,
    width = 15,
    range = 80,
    speed = 0.08;


canvas.addEventListener('mousemove', function(e) {
  mouseX = e.pageX - this.offsetLeft;
  mouseY = e.pageY - this.offsetTop;
});

window.addEventListener('keydown', function() {
  ctx.clearRect(0, 0, W, H);
});



;(function draw() {
  requestAnimationFrame(draw);
  //ctx.clearRect(0, 0, W, H);

  var size = width + Math.sin(angle); /* range */
  ctx.lineWidth = size;
  angle += speed;

  ctx.beginPath();
  ctx.moveTo(lastMouseX, lastMouseY);
  ctx.lineTo(mouseX, mouseY);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#373AFF';
  ctx.stroke();


  lastMouseX = mouseX;
  lastMouseY = mouseY;

})();

var link = document.createElement('a');
    link.innerHTML = 'download image';
link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);
document.body.appendChild(link);
