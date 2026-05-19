let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(150,170,100,110);
ctx.strokeRect(150,170,100,110);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(160,195,30,30);
ctx.strokeRect(160,195,30,30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(210,195,30,30);
ctx.strokeRect(210,195,30,30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = ' rgba(136, 58, 35, 0.77)';
ctx.fillRect(190,230,20,50);
ctx.strokeRect(190,230,20,50);
ctx.closePath();

ctx.beginPath();
ctx.moveTo(200, 120);
ctx.lineTo(150, 170);
ctx.lineTo(250, 170);
ctx.closePath();

ctx.fillStyle = "salmon";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(300,80,50,1.5*Math.PI,5 *Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'gray';
ctx.strokeStyle = 'gray';
ctx.fillRect(1,280,1000,300);
ctx.closePath();
	
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle =  ' rgba(136, 58, 35, 0.84)';
ctx.fillRect(50,235,20,45)
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = ' rgba(136, 58, 35, 0.84)';
ctx.fillRect(339,300,20,45)
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = `green`
ctx.strokeStyle = `green`
ctx.arc(347,280,30,1.5*Math.PI,5 *Math.PI);
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = `green`
ctx.strokeStyle = `green`
ctx.arc(60,220,30,1.5*Math.PI,5 *Math.PI);
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(38, 113, 173)';
ctx.strokeStyle = ' rgb(50, 124, 184)';
ctx.arc(1,285,45,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(38, 113, 173)';
ctx.fillRect(1,290,45,1000);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(38, 113, 173)';
ctx.fillRect(1,350,130,1000);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(38, 113, 173)';
ctx.arc(120,394.5,45,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();