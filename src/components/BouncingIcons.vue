<template>
  <div
    ref="iconContainer"
    class="bouncing-icon box"
    :style="{ top: `${position.top}px`, left: `${position.left}px` }"
  >
    <button type="button">
      <img
        title="Copy Kristina Diamond's email to your clipboard"
        :src="mailIcon"
        alt="Copy Kristina Diamond's email to your clipboard"
      />
    </button>
  </div>
</template>

<script>
import mail from '../assets/mail.svg';

const EDGE_MARGIN = 20;
const CONTENT_MARGIN = 20;
const FLOAT_OFFSET = 10;
const MAX_RANDOM_ATTEMPTS = 100;
const RESIZE_DEBOUNCE_MS = 150;
const GRID_STEP = 20;

const OBSTACLE_SELECTORS = [
  'h1',
  'p',
  'button',
  '.eye',
  '.eyes',
].join(', ');

export default {
  name: 'BouncingIcons',
  data() {
    return {
      mailIcon: mail,
      position: { top: EDGE_MARGIN, left: EDGE_MARGIN },
      resizeObserver: null,
      resizeTimeout: null,
    };
  },
  mounted() {
    this.onWindowResize = this.debounceReposition.bind(this);

    window.addEventListener('resize', this.onWindowResize);

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(this.onWindowResize);
      this.resizeObserver.observe(document.body);
    }

    this.$nextTick(() => {
      this.repositionIcon();
    });
  },
  beforeUnmount() {
    this.cleanupListeners();
  },
  methods: {
    debounceReposition() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(() => {
        this.$nextTick(() => {
          this.repositionIcon();
        });
      }, RESIZE_DEBOUNCE_MS);
    },
    cleanupListeners() {
      window.removeEventListener('resize', this.onWindowResize);
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = null;
      }
    },
    getIconCollisionRect(left, top, width, height) {
      return {
        top: top - CONTENT_MARGIN - FLOAT_OFFSET,
        left: left - CONTENT_MARGIN,
        right: left + width + CONTENT_MARGIN,
        bottom: top + height + CONTENT_MARGIN,
      };
    },
    rectsIntersect(a, b) {
      return !(
        a.right <= b.left
        || a.left >= b.right
        || a.bottom <= b.top
        || a.top >= b.bottom
      );
    },
    isVisibleElement(el) {
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') {
        return false;
      }
      if (parseFloat(style.opacity) === 0) {
        return false;
      }
      if (style.pointerEvents === 'none') {
        return false;
      }
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    },
    getObstacleRects() {
      const iconEl = this.$refs.iconContainer;
      if (!iconEl) {
        return [];
      }

      const rects = [];
      const elements = document.querySelectorAll(OBSTACLE_SELECTORS);

      elements.forEach((el) => {
        if (el === iconEl || iconEl.contains(el) || el.contains(iconEl)) {
          return;
        }
        if (!this.isVisibleElement(el)) {
          return;
        }
        rects.push(el.getBoundingClientRect());
      });

      return rects;
    },
    isPositionValid(left, top, width, height, obstacles) {
      const maxLeft = window.innerWidth - width - EDGE_MARGIN;
      const maxTop = window.innerHeight - height - EDGE_MARGIN;

      if (left < EDGE_MARGIN || top < EDGE_MARGIN || left > maxLeft || top > maxTop) {
        return false;
      }

      const iconRect = this.getIconCollisionRect(left, top, width, height);
      return !obstacles.some((obstacle) => this.rectsIntersect(iconRect, obstacle));
    },
    findValidPosition(width, height, obstacles) {
      const maxLeft = Math.max(EDGE_MARGIN, window.innerWidth - width - EDGE_MARGIN);
      const maxTop = Math.max(EDGE_MARGIN, window.innerHeight - height - EDGE_MARGIN);

      if (maxLeft < EDGE_MARGIN || maxTop < EDGE_MARGIN) {
        return { left: EDGE_MARGIN, top: EDGE_MARGIN };
      }

      for (let attempt = 0; attempt < MAX_RANDOM_ATTEMPTS; attempt += 1) {
        const left = EDGE_MARGIN + Math.random() * (maxLeft - EDGE_MARGIN);
        const top = EDGE_MARGIN + Math.random() * (maxTop - EDGE_MARGIN);
        if (this.isPositionValid(left, top, width, height, obstacles)) {
          return { left, top };
        }
      }

      for (let top = EDGE_MARGIN; top <= maxTop; top += GRID_STEP) {
        for (let left = EDGE_MARGIN; left <= maxLeft; left += GRID_STEP) {
          if (this.isPositionValid(left, top, width, height, obstacles)) {
            return { left, top };
          }
        }
      }

      const fallbackCandidates = [
        { left: EDGE_MARGIN, top: EDGE_MARGIN },
        { left: maxLeft, top: EDGE_MARGIN },
        { left: EDGE_MARGIN, top: maxTop },
        { left: maxLeft, top: maxTop },
        { left: (EDGE_MARGIN + maxLeft) / 2, top: EDGE_MARGIN },
        { left: (EDGE_MARGIN + maxLeft) / 2, top: maxTop },
        { left: EDGE_MARGIN, top: (EDGE_MARGIN + maxTop) / 2 },
        { left: maxLeft, top: (EDGE_MARGIN + maxTop) / 2 },
      ];

      const validFallback = fallbackCandidates.find(
        (candidate) => this.isPositionValid(
          candidate.left,
          candidate.top,
          width,
          height,
          obstacles,
        ),
      );

      if (validFallback) {
        return validFallback;
      }

      return { left: EDGE_MARGIN, top: EDGE_MARGIN };
    },
    repositionIcon() {
      const el = this.$refs.iconContainer;
      if (!el) {
        return;
      }

      const width = el.offsetWidth;
      const height = el.offsetHeight;
      const obstacles = this.getObstacleRects();
      this.position = this.findValidPosition(width, height, obstacles);
    }
  }
};
</script>
