let canvas = document.getElementById('canvas-webgl');
if(!canvas){
    cavas = document.createElement("canvas");
    document.body.appendChild(cavas);
    cavas.setAttribute("id", "canvas-webgl");
}
// canvas.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
// });
// canvas.addEventListener('selectstart', function (event) {
//     event.preventDefault();
// });

require('./init.js').default();