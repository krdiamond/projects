<template>
  <canvas
    ref="spawncontainer"
    :width="width"
    :height="height"
  />
</template>

<script>
export default {
  name: 'ConfettiContainer',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      particles: [],
      ctx: null,
      canvas: null,
      animating: false,
    };
  },
  mounted() {
    this.canvas = this.$refs.spawncontainer;
    this.ctx = this.canvas.getContext('2d');
    document.addEventListener('click', this.handleDocumentClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  },
  methods: {
    r(a, b, c) {
      return parseFloat(
        (Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(
          c ? c : 0,
        ),
      );
    },
    getMainBorderElement() {
      return document.querySelector('.main-border');
    },
    getBorderInnerClipRect() {
      const borderEl = this.getMainBorderElement();
      const { canvas } = this;

      if (!borderEl || !canvas) {
        return null;
      }

      const borderRect = borderEl.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const innerLeft = borderRect.left + borderEl.clientLeft;
      const innerTop = borderRect.top + borderEl.clientTop;
      const innerRight = innerLeft + borderEl.clientWidth;
      const innerBottom = innerTop + borderEl.clientHeight;

      return {
        left: innerLeft - canvasRect.left,
        top: innerTop - canvasRect.top,
        right: innerRight - canvasRect.left,
        bottom: innerBottom - canvasRect.top,
      };
    },
    getTextClipRect(marqueeTop) {
      const border = this.getBorderInnerClipRect();

      if (!border) {
        if (marqueeTop === null) {
          return null;
        }

        const canvasRect = this.canvas.getBoundingClientRect();
        const bottom = marqueeTop - canvasRect.top;
        const height = bottom;

        if (height <= 0) {
          return null;
        }

        return {
          left: 0,
          top: 0,
          width: this.width,
          height,
        };
      }

      let bottom = border.bottom;

      if (marqueeTop !== null) {
        const canvasRect = this.canvas.getBoundingClientRect();
        const marqueeBottom = marqueeTop - canvasRect.top;
        bottom = Math.min(bottom, marqueeBottom);
      }

      const width = border.right - border.left;
      const height = bottom - border.top;

      if (width <= 0 || height <= 0) {
        return null;
      }

      return {
        left: border.left,
        top: border.top,
        width,
        height,
      };
    },
    isTextParticleOutsideBorder(particle, border) {
      const half = particle.fontSize * 0.55;

      return (
        particle.x < border.left - half
        || particle.x > border.right + half
        || particle.y < border.top - half
        || particle.y > border.bottom + half
      );
    },
    isArcParticleOutsideBorder(particle, border) {
      const { radius } = particle;

      return (
        particle.x < border.left - radius
        || particle.x > border.right + radius
        || particle.y < border.top - radius
        || particle.y > border.bottom + radius
      );
    },
    getArcClipRect(border) {
      if (!border) {
        return null;
      }

      const width = border.right - border.left;
      const height = border.bottom - border.top;

      if (width <= 0 || height <= 0) {
        return null;
      }

      return {
        left: border.left,
        top: border.top,
        width,
        height,
      };
    },
    getMarqueeElement() {
      return document.querySelector('#Marquee')
        || document.querySelector('.marquee');
    },
    getMarqueeTop() {
      const marquee = this.getMarqueeElement();
      return marquee ? marquee.getBoundingClientRect().top : null;
    },
    getMarqueeSpawnPosition(event) {
      const marquee = this.getMarqueeElement();

      if (!marquee) {
        return { x: event.clientX, y: event.clientY };
      }

      const rect = marquee.getBoundingClientRect();
      const padding = 16;
      const x = Math.min(
        Math.max(event.clientX, rect.left + padding),
        rect.right - padding,
      );
      const offsetAbove = window.innerWidth < 768 ? 28 : 48;
      const y = rect.top - offsetAbove;

      return { x, y };
    },
    getTextParticleMaxY(fontSize, marqueeTop) {
      if (marqueeTop === null) {
        return null;
      }

      return marqueeTop - fontSize * 0.55;
    },
    handleDocumentClick(event) {
      if (event.target.closest('#Marquee')) {
        return;
      }

      this.spawnConfetti(event.clientX, event.clientY);
    },
    spawnCopied(event) {
      const { x, y } = this.getMarqueeSpawnPosition(event);
      this.spawnTextBurst(x, y);
    },
    spawnConfetti(x, y) {
      const colors = ['#4200FF'];
      const bubbles = 15;
      const setRadius = window.innerWidth < 768 ? 10 : 20;

      for (let i = 0; i < bubbles; i++) {
        this.particles.push({
          type: 'arc',
          x,
          y,
          radius: this.r(setRadius),
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: this.r(0, 360, true),
          speed: this.r(8, 12),
          friction: 0.9,
          opacity: this.r(0, 0.5, true),
          yVel: 0,
          gravity: 0.1,
        });
      }

      this.ensureAnimationLoop();
    },
    getTextParticleOpacity(particle) {
      const holdRatio = 0.85;
      const lifeRatio = particle.life / particle.maxLife;

      if (lifeRatio < holdRatio) {
        return 1;
      }

      const fadeProgress = (lifeRatio - holdRatio) / (1 - holdRatio);
      return Math.max(0, 1 - fadeProgress);
    },
    spawnTextBurst(x, y) {
      const bubbles = 3;
      const fontSize = window.innerWidth < 768 ? 14 : 18;
      const marqueeTop = this.getMarqueeTop();

      for (let i = 0; i < bubbles; i++) {
        const particleFontSize = this.r(fontSize * 0.8, fontSize * 1.2, true);
        const maxY = this.getTextParticleMaxY(particleFontSize, marqueeTop);
        const spawnY = y + this.r(-8, 8, true);
        const boundedY = maxY === null ? spawnY : Math.min(spawnY, maxY);
        this.particles.push({
          type: 'text',
          x: x + this.r(-30, 30, true),
          y: boundedY,
          text: 'copied',
          color: '#4200FF',
          fontSize: particleFontSize,
          rotation: this.r(200, 340, true),
          speed: this.r(6, 11),
          friction: 0.9,
          opacity: 1,
          life: 0,
          maxLife: this.r(95, 115, true),
          yVel: this.r(-1.4, -0.4, true),
          gravity: 0.03,
        });
      }

      this.ensureAnimationLoop();
    },
    ensureAnimationLoop() {
      if (this.animating) {
        return;
      }

      this.animating = true;
      this.render();
    },
    render() {
      const { ctx, canvas, particles } = this;
      const marqueeTop = this.getMarqueeTop();
      const borderClip = this.getBorderInnerClipRect();
      const arcClipRect = this.getArcClipRect(borderClip);
      const textClipRect = this.getTextClipRect(marqueeTop);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.speed * Math.cos((p.rotation * Math.PI) / 180);
        p.y += p.speed * Math.sin((p.rotation * Math.PI) / 180);

        if (p.type === 'text') {
          p.life += 1;
          p.opacity = this.getTextParticleOpacity(p);
        } else {
          p.opacity -= 0.01;
        }

        p.speed *= p.friction;
        p.yVel += p.gravity;
        p.y += p.yVel;

        if (p.type === 'text') {
          if (borderClip && this.isTextParticleOutsideBorder(p, borderClip)) {
            particles.splice(i, 1);
            continue;
          }

          if (marqueeTop !== null) {
            const maxY = this.getTextParticleMaxY(p.fontSize, marqueeTop);

            if (p.y > maxY) {
              particles.splice(i, 1);
              continue;
            }
          }
        } else if (p.type === 'arc') {
          if (borderClip && this.isArcParticleOutsideBorder(p, borderClip)) {
            particles.splice(i, 1);
            continue;
          }

          p.radius *= p.friction;
        }

        if (p.opacity < 0 || (p.type === 'arc' && p.radius < 0)) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;

        if (p.type === 'text') {
          if (textClipRect) {
            ctx.beginPath();
            ctx.rect(
              textClipRect.left,
              textClipRect.top,
              textClipRect.width,
              textClipRect.height,
            );
            ctx.clip();
          }

          ctx.font = `${p.fontSize}px 'Alata-Regular', Arial, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = p.color;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillText(p.text, 0, 0);
        } else if (p.type === 'arc') {
          if (arcClipRect) {
            ctx.beginPath();
            ctx.rect(
              arcClipRect.left,
              arcClipRect.top,
              arcClipRect.width,
              arcClipRect.height,
            );
            ctx.clip();
          }

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length === 0) {
        this.animating = false;
        return;
      }

      requestAnimationFrame(() => this.render());
    },
  },
};
</script>
