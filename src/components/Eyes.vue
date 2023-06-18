<template>
  <div>
    <div class="eye eye--left js-eye" ref="leftEye">
      <div class="pupil js-pupil"></div>
    </div>

    <div class="eye eye--right js-eye" ref="rightEye">
      <div class="pupil js-pupil"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
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
};
</script>


<!-- <template>
    <div class="eyes">
      <div class="flex">
        <div class="eye margin-right---20">
          <div class="pupil"></div>
        </div>
        <div class="eye bg--white">
          <div class="pupil"></div>
        </div>
      </div>
    </div>
  
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        pupilsArray: [],
        input: {
          mouseX: {
            start: 0,
            end: window.innerWidth,
            current: 0,
            range: 0,
            fraction: 0,
          },
          mouseY: {
            start: 0,
            end: window.innerHeight,
            current: 0,
            range: 0,
            fraction: 0,
          },
        },
        output: {
          x: {
            start: 0,
            end: 0,
            current: 0,
            range: 0,
          },
          y: {
            start: 0,
            end: 0,
            current: 0,
            range: 0,
          },
        },
      };
    },
    mounted() {
      this.pupilsArray = Array.from(document.getElementsByClassName('pupil'));
  
      this.input.mouseX.range = this.input.mouseX.end - this.input.mouseX.start;
      this.input.mouseY.range = this.input.mouseY.end - this.input.mouseY.start;
  
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('touchstart', this.handleMouseMove);
      window.addEventListener('resize', this.handleResize);
  
      this.updateOutputRange();
    },
    methods: {
      handleMouseMove(event) {
        this.input.mouseX.current = event.clientX;
        this.input.mouseX.fraction = (this.input.mouseX.current - this.input.mouseX.start) / this.input.mouseX.range;
  
        this.input.mouseY.current = event.clientY;
        this.input.mouseY.fraction = (this.input.mouseY.current - this.input.mouseY.start) / this.input.mouseY.range;
  
        this.output.x.current = this.output.x.start + this.input.mouseX.fraction * this.output.x.range;
        this.output.y.current = this.output.y.start + this.input.mouseY.fraction * this.output.y.range;
  
        this.pupilsArray.forEach((pupil) => {
          pupil.style.transform = `translate(${this.output.x.current}px, ${this.output.y.current}px)`;
        });
      },
      handleResize() {
        this.input.mouseX.end = window.innerWidth;
        this.input.mouseX.range = this.input.mouseX.end - this.input.mouseX.start;
  
        this.input.mouseY.end = window.innerHeight;
        this.input.mouseY.range = this.input.mouseY.end - this.input.mouseY.start;
      },
      updateOutputRange() {
        const mediaQuery1 = window.matchMedia('(min-width: 351px) and (max-width: 768px)');
        const mediaQuery2 = window.matchMedia('(min-width: 768px) and (max-width: 1440px)');
        const mediaQuery3 = window.matchMedia('(min-width: 1440px)');
  
        if (mediaQuery1.matches) {
          this.output.x.start = -10;
          this.output.x.end = 10;
          this.output.y.start = -10;
          this.output.y.end = 10;
        }
        if (mediaQuery2.matches) {
          this.output.x.start = -20;
          this.output.x.end = 20;
          this.output.y.start = -20;
          this.output.y.end = 20;
        }
        if (mediaQuery3.matches) {
          this.output.x.start = -50;
          this.output.x.end = 50;
          this.output.y.start = -50;
          this.output.y.end = 50;
        }
  
        this.output.x.range = this.output.x.end - this.output.x.start;
        this.output.y.range = this.output.y.end - this.output.y.start;
      },
    },
  };
  </script> -->