<template>
  <canvas ref="spawncontainer"></canvas>
</template>

<script>
export default {
  name: 'ConfettiContainer',
  mounted() {
    this.confetti();
  },
  methods: {
    confetti() {
      const colors = ['#4200FF'];
      const shapes = ['arc'];
      const bubbles = 15;
      const spawnc = this.$refs.spawncontainer;
      const spawnctx = spawnc.getContext('2d');

      function render(particles, spawnctx, width, height) {
        requestAnimationFrame(() => render(particles, spawnctx, width, height));
        spawnctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          p.x += p.speed * Math.cos((p.rotation * Math.PI) / 180);
          p.y += p.speed * Math.sin((p.rotation * Math.PI) / 180);
          p.opacity -= 0.01;
          p.speed *= p.friction;
          p.radius *= p.friction;
          p.yVel += p.gravity;
          p.y += p.yVel;
          if (p.opacity < 0 || p.radius < 0) return;
          spawnctx.beginPath();
          spawnctx.globalAlpha = p.opacity;
          spawnctx.fillStyle = p.color;
          if (p.shape == 'arc') {
            spawnctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
          }
          spawnctx.fill();
        });
      }

      const r = (a, b, c) => parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));

      function spawn(event) {
        const mousex = event.clientX;
        const mousey = event.clientY;
        const particles = [];
        let setRadius = 0;

        if (window.innerWidth < 768) {
          setRadius = 10;
        } else {
          setRadius = 20;
        }

        for (let i = 0; i < bubbles; i++) {
          particles.push({
            x: mousex,
            y: mousey,
            radius: r(setRadius),
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            rotation: r(0, 360, true),
            speed: r(8, 12),
            friction: 0.9,
            opacity: r(0, 0.5, true),
            yVel: 0,
            gravity: 0.1,
          });
        }

        render(particles, spawnctx, spawnc.width, spawnc.height);
      }

      document.onclick = spawn;
    },
  },
};
</script>