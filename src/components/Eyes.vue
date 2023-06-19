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
    const pupils = document.querySelectorAll(".js-pupil");
    const eyeRadius = 40; // pupil max position - percentage from center
    const maxPupilDistanceFromCenter = 45; // pupil max position - percentage from center

    function moveEyes(event) {
      let offset = rightBetweenTheEyes(eyes);
      let x = (event.clientX - offset.x) / window.innerWidth * 100;
      let y = (event.clientY - offset.y) / window.innerHeight * 100;
      let pupilDistanceFromCenter = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

      if (pupilDistanceFromCenter >= maxPupilDistanceFromCenter) {
        // if pupil out of eye - don't panic
        let angle = Math.atan(x / y);
        let adjustedX = Math.sin(angle) * maxPupilDistanceFromCenter;
        let adjustedY = Math.cos(angle) * maxPupilDistanceFromCenter;

        if (y < 0) {
          x = adjustedX * -1;
          y = adjustedY * -1;
        } else {
          x = adjustedX;
          y = adjustedY;
        }
      }

      pupils.forEach((p) => {
        p.style.left = x + 50 + "%"; // 50 is because 50% is CSS center
        p.style.top = y + 50 + "%";
      });
    }

    function rightBetweenTheEyes(eyes) {
      let offset = { x: 0, y: 0 };
      let eye0Left = eyes[0].getBoundingClientRect().left;
      let eye0Top = eyes[0].getBoundingClientRect().top;
      let eye1Left = eyes[1].getBoundingClientRect().left;
      let eye1Top = eyes[1].getBoundingClientRect().top;

      offset.x = (eye0Left + eye1Left) / 2 + eyeRadius;
      offset.y = (eye0Top + eye1Top) / 2 + eyeRadius;

      return offset;
    }

    document.addEventListener("mousemove", moveEyes);
    },
  },
};
</script>