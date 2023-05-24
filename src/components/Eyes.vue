


<template>
  <div class="eyes padding--20">
    <div class="flex">
      <div class="eye">
        <div class="pupil"></div>
      </div>
      <div class="eye">
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
      this.updateOutputRange();
      
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
</script>