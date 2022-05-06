function getFactoid(){

var ar = new Array (7)
ar[0] = 'I also like mechanical keyboards. <i class="fas fa-keyboard"></i>'
ar[1] = 'I also love to play indie video games. <i class="fas fa-gamepad-alt"></i>'
ar[2] = 'I also have a chihuahua mix named Scotch. <i class="fas fa-dog"></i>'
ar[3] = 'I also have fostered dogs before. <i class="fas fa-bone"></i>'
ar[4] = 'I also love PB&J. <i class="fas fa-bread-loaf"></i>'
ar[5] = 'I also have 6 tattoos. <i class="fas fa-flower"></i>'
ar[6] = 'I also have a 3D printer. <i class="fas fa-cube"></i>'

var now = new Date()
var sec = now.getSeconds()
document.getElementById('factoid').innerHTML = ar[sec % 8]
}
getFactoid()