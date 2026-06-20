<template>
  <div
    id="Marquee"
    ref="container"
    class="marquee width--full bg--blue color--white"
    @click="copyToClipboard('krdiamond@gmail.com')"
  >
    <div
      class="marquee__track"
      :style="trackStyle"
      aria-hidden="true"
    >
      <span
        v-for="index in repeatCount"
        :key="index"
        class="marquee__content"
      >
        <span class="marquee__text">krdiamond@gmail.com</span>
        <span
          class="marquee__icon"
          aria-hidden="true"
        >💌</span>
      </span>
    </div>
    <span
      ref="measure"
      class="marquee__content marquee__measure"
      aria-hidden="true"
    >
      <span class="marquee__text">krdiamond@gmail.com</span>
      <span
        class="marquee__icon"
        aria-hidden="true"
      >💌</span>
    </span>
  </div>
</template>

<script>
const SCROLL_SPEED_PX_PER_SEC = 13.556;

export default {
  name: 'Marquee',
  data() {
    return {
      repeatCount: 2,
      segmentWidth: 0,
      animationDuration: 18,
      resizeObserver: null,
      updateTimer: null,
    };
  },
  computed: {
    trackStyle() {
      if (!this.segmentWidth) {
        return { '--marquee-play-state': 'paused' };
      }

      return {
        '--marquee-segment-width': `${this.segmentWidth}px`,
        '--marquee-duration': `${this.animationDuration}s`,
        '--marquee-play-state': 'running',
      };
    },
  },
  mounted() {
    this.updateMarquee();

    this.resizeObserver = new ResizeObserver(() => {
      this.scheduleUpdate();
    });

    if (this.$refs.container) {
      this.resizeObserver.observe(this.$refs.container);
    }

    if (this.$refs.measure) {
      this.resizeObserver.observe(this.$refs.measure);
    }

    window.addEventListener('resize', this.scheduleUpdate);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.scheduleUpdate);

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
      this.updateTimer = null;
    }
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    scheduleUpdate() {
      if (this.updateTimer) {
        clearTimeout(this.updateTimer);
      }

      this.updateTimer = setTimeout(() => {
        this.updateMarquee();
      }, 150);
    },
    updateMarquee() {
      const container = this.$refs.container;
      const measure = this.$refs.measure;

      if (!container || !measure) {
        return;
      }

      const containerWidth = container.clientWidth;
      const segmentWidth = measure.offsetWidth;

      if (!containerWidth || !segmentWidth) {
        return;
      }

      const count = Math.max(
        2,
        Math.ceil((containerWidth + segmentWidth) / segmentWidth),
      );

      this.segmentWidth = segmentWidth;
      this.repeatCount = count;
      this.animationDuration = segmentWidth / SCROLL_SPEED_PX_PER_SEC;
    },
  },
};
</script>
