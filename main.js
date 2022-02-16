canvas =document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(300, 190, 40, 0, 2*Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(390, 190, 40, 0, 2*Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(480, 190, 40, 0, 2*Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(347.5, 230, 40, 0, 2*Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(437, 230, 40, 0, 2*Math.PI, true);
ctx.stroke();