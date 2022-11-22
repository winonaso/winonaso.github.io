function getFactoid(){

var ar = new Array (11)
ar[0] = 'I also love mechanical keyboards. <i class="fas fa-keyboard"></i>'
ar[1] = 'I also love to play indie video games. <i class="fas fa-gamepad-alt"></i>'
ar[2] = 'I also have two chihuahua mixes named Scotch and Soda. <i class="fas fa-dog"></i><i class="fas fa-dog"></i>'
ar[3] = 'I also have fostered dogs before. <i class="fas fa-bone"></i>'
ar[4] = 'I also love PB&J. <i class="fas fa-bread-loaf"></i>'
ar[5] = 'I also have 8 tattoos. <i class="fas fa-flower"></i>'
ar[6] = 'I also have a 3D printer. <i class="fas fa-cube"></i>'
ar[7] = 'I also have a collection of over 50 board games. <i class="fas fa-chess-pawn"></i>'
ar[8] = 'I also own 2 Nintendo Switches. <i class="fas fa-gamepad-alt"></i>'
ar[9] = 'I also build my own mechanical keyboards. <i class="fas fa-bolt"></i>'
ar[10] = 'I also built my custom PC. <i class="fas fa-computer"></i>'


var now = new Date()
var sec = now.getSeconds()
document.getElementById('factoid').innerHTML = ar[sec % 8]
}
getFactoid()