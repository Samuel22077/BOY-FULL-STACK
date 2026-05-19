function iniciar() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const pac = {
        x: 200,
        y: 200,
        raio: 35,
        angulo: 0
    };

    function clamp(v, min, max) {
        return Math.max(min, Math.min(max, v));
    }

    function desenha() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const boca = 0.25 * Math.PI * Math.abs(Math.sin(pac.angulo));

        ctx.fillStyle = '#FFC107';
        ctx.beginPath();
        ctx.moveTo(pac.x, pac.y);
        ctx.arc(pac.x, pac.y, pac.raio, boca, Math.PI * 2 - boca);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(pac.x + 6, pac.y - pac.raio * 0.45, 3.5, 0, Math.PI * 2);
        ctx.fill();

        pac.angulo += 0.18;
    }

    function animacao() {
        desenha();
        requestAnimationFrame(animacao);
    }

    animacao();

    document.addEventListener('mousemove', function(e) {
        let rect = canvas.getBoundingClientRect();

        let mouseX = e.clientX - rect.left;
        let mouseY = e.clientY - rect.top;

        
        if (
            mouseX > 0 && mouseX < canvas.width &&
            mouseY > 0 && mouseY < canvas.height
        ) {
            console.log(mouseX)
            pac.x = clamp(mouseX, pac.raio, canvas.width  - pac.raio);
            pac.y = clamp(mouseY, pac.raio, canvas.height - pac.raio);
        } else {
            pac.x = pac.x;
            pac.y = pac.y
        }
    });
}

iniciar();