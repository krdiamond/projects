<template>

    <div class="eyes inline-block">
        <div class="flex">
            <div class="eye left">
                <div class="pupil" :style="styles"></div>
            </div>
            <div class="eye eye--right">
                <div class="pupil" :style="styles"></div>
            </div>
        </div>
        
    </div>

</template>

<script>

export default {
  name: 'ThreeTest',
  data() {
      return {
        eyesX: 0,
        eyesY: 0,
      }
  },
  computed: {
    styles () {
      return {
        left: this.eyesX + "%",
        top: this.eyesY + "%"
      }
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.followMouse);
    document.addEventListener('touchstart', this.followMouse);
  },
  methods: {
    followMouse(e) {
        this.eyesX = e.clientX * 100 / window.innerWidth - 80;
        this.eyesY = e.clientY * 100 / window.innerHeight - 50;
    },
  }
}
</script>