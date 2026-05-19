
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;

 
    

  
    ctx.strokeStyle = '#555';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, h);
    ctx.stroke();

   
    ctx.strokeStyle = 'green';
   
    function drawArc(radius) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, Math.PI, 2 * Math.PI);
    ctx.stroke();
}
    
    drawArc(70);
  
    ctx.beginPath();
ctx.arc(cx, cy - 0, 100, Math.PI, 1.25 * Math.PI);
ctx.stroke();

 ctx.beginPath();
ctx.arc(cx, cy, 100, 1.75 * Math.PI, 0); 
ctx.stroke();

   
    ctx.beginPath();
    ctx.arc(cx, h, 80, Math.PI, 1.5 * Math.PI);
 
    ctx.beginPath();
    ctx.arc(cx, h, 100, Math.PI, 1.5 * Math.PI);
    ctx.stroke();

    
    ctx.beginPath();
    ctx.arc(cx, h, 80, 1.5 * Math.PI, 2 * Math.PI);
    ctx.stroke();

    

   
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 70, 70);
    ctx.strokeStyle = 'blue';
    ctx.beginPath(); ctx.moveTo(70, 70); ctx.lineTo(cx, cy); ctx.stroke();

    
    ctx.fillStyle = 'red';
    ctx.fillRect(w - 70, 0, 70, 70);
    ctx.strokeStyle = 'red';
    ctx.beginPath(); ctx.moveTo(w - 70, 70); ctx.lineTo(cx, cy); ctx.stroke();

    
    ctx.fillStyle = 'cyan';
    ctx.beginPath();
    ctx.arc(cx, cy - 40, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'blue'; ctx.stroke();

    
    ctx.fillStyle = 'cyan';
    ctx.fillRect(0, cy - 35, 40, 70);

    
    ctx.fillRect(w - 40, cy - 20, 40, 40);

    
    ctx.fillStyle = 'red';
    ctx.fillRect(cx - 50, cy, 50, 50);

  
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'green';
   
    ctx.beginPath(); ctx.arc(cx - 100, cy + 90, 25, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    
    ctx.beginPath(); ctx.arc(cx + 80, cy + 90, 25, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

    
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, h - 80, 40, 80);
    ctx.fillRect(0, h - 40, 80, 40);

 
    ctx.fillStyle = 'black';
    ctx.fillRect(w - 40, h - 80, 40, 80);
    ctx.fillRect(w - 80, h - 40, 80, 40);

    
    ctx.fillStyle = 'cyan';
    ctx.beginPath();
    ctx.arc(cx, h, 60, Math.PI, 0);
    ctx.fill();
    ctx.strokeStyle = 'green'; ctx.stroke();

    ctx.strokeStyle = 'green';
    ctx.lineWidth = 1;

   
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.stroke();

    // --- TEXTO ---
    ctx.fillStyle = '#555';
    ctx.font = '24px Arial';
    ctx.fillText('Canvas', cx - 45, 90);