mousevent= "empty";
last_y_position;
last_x_position;
can=document.getElementById("myCanvas");
ctx=can.getContext("2d");
color="black";
line_width=1;

can.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
color=document.getElementById("color_get").value;
line_width=document.getElementById("width_get").value;
mousevent="mouseDown";
}

can.addEventListener("mouseleave", nomouse);

function nomouse(e) {
    mousevent="mousegone";
}

can.addEventListener("mouseup", my_mouseup);

function mouseup(e) {
    mousevent="mouseup";
}
can.addEventListener("mousemove", my_mousemove);
 
function mousemove(e) {
current_x=e.clientX-can.offsetLeft;
current_y=e.clientY=can.offsetTop;
if (mousevent=="mouseDown") {
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
ctx.moveTo(last_x_position,last_y_position);
ctx.lineTo(current_x,current_y);
ctx.stroke();
}
last_x_position=current_x;
last_y_position=current_y;
}
function clear_c() {
    ctx.clearRect(0,0,ctx.can.width,ctx.can.height);
}