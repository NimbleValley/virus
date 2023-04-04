var speed = 3;
var xDir = 1;
var yDir = 1;

var width = 400;
var height = 400;

openWin();
animate();

function animate() {
    requestAnimationFrame(animate);

    moveWin();
}

function openWin() {
  montyWindow = window.open("","Inspiration", 'width=400, height=400');
  montyWindow.document.body.innerHTML = `<div style="width: 100vw; height: 100vh; background-image: url('https://cedarburg.instructure.com/files/11181/download?download_frd=1&verifier=odDr2DRsenQ8RwAnx6QApTxXUXx6tijBRVCiHF5w'); background-size: 100% 100%;"></div>`;
}

function moveWin() {
  if(Math.abs(montyWindow.screenTop) + height + 5 > screen.height) {
    yDir = -1;
  } else if(montyWindow.screenTop < 5) {
    yDir = 1;
  }

  if(Math.abs(montyWindow.screenLeft) + width + 5 > screen.width) {
    xDir = -1;
  } else if(montyWindow.screenLeft < 5) {
    xDir = 1;
  }

  montyWindow.moveBy(speed * xDir, speed * yDir);
  montyWindow.resizeTo(width, height);
  montyWindow.focus();
}