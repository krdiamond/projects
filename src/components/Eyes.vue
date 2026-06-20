<template>
  <div @click="blink()">
    <div ref="leftEye" class="eye eye--left js-eye" :class="{ 'blink': blinking, 'openEye': !blinking }" >
      <div class="pupil js-pupil" :class="{ 'touchPupil': isTouchDevice }"></div>
    </div>
    <div ref="rightEye" class="eye eye--right js-eye" :class="{ 'blink': blinking, 'openEye': !blinking}">
      <div class="pupil js-pupil" :class="{ 'touchPupil': isTouchDevice }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Eyes',
  props: {
    isTouchDevice: {
      type: Boolean,
    },
  },
  data() {
      return {
        blinking: false,
      };
  },
  mounted() {
    this.eyes();
  },
  methods: {
    blink(){
      this.blinking = true;
      setTimeout(() => {
        this.blinking = false;
        }, 500);
    },
    eyes() {
      const eyes = [this.$refs.leftEye, this.$refs.rightEye];
      const pupils = this.$el.querySelectorAll(".js-pupil");
      const maxPupilDistanceFromCenter = 45;

      let lastEvent = {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2,
      };

      function centerBetweenEyes(eyeEls) {
        const rect0 = eyeEls[0].getBoundingClientRect();
        const rect1 = eyeEls[1].getBoundingClientRect();
        return {
          x: (rect0.left + rect0.right + rect1.left + rect1.right) / 4,
          y: (rect0.top + rect0.bottom + rect1.top + rect1.bottom) / 4,
        };
      }

      function moveEyes(event) {
        lastEvent = event;
        const offset = centerBetweenEyes(eyes);
        let x = ((event.clientX - offset.x) / window.innerWidth) * 100;
        let y = ((event.clientY - offset.y) / window.innerHeight) * 100;
        const pupilDistanceFromCenter = Math.sqrt(x * x + y * y);

        if (pupilDistanceFromCenter >= maxPupilDistanceFromCenter) {
          const angle = Math.atan2(x, y);
          const adjustedX = Math.sin(angle) * maxPupilDistanceFromCenter;
          const adjustedY = Math.cos(angle) * maxPupilDistanceFromCenter;
          x = adjustedX;
          y = adjustedY;
        }

        pupils.forEach((p) => {
          p.style.left = x + 50 + "%";
          p.style.top = y + 50 + "%";
        });
      }

      document.addEventListener("mousemove", moveEyes);
      window.addEventListener("resize", () => moveEyes(lastEvent));
      moveEyes(lastEvent);
    },
  },
};
</script>