<template>
  <div ref="main" class="home container margin--20 flex flex--col">
      <header>
        <h1 v-if="horizontalLayout" class="hor">KRISTINA DIAMOND</h1>
        <h1 v-else class="vert flex flex--col block--md">
              <span class="padding-right--20--md">KRISTINA</span>
              <span class="space_x1 no-letter-spacing--md">DIAMOND</span>
          </h1>
          <p :class="{ 'p-hor': horizontalLayout }" >
            front end web developer specializing in shopify projects
          </p>
      </header>
      <div>
        <button class="blob-btn" @click="$emit('open-portfolio')">
          PORTFOLIO
          <span class="blob-btn__inner">
              <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
              </span>
          </span>
      </button>
      </div>
      
        <RandomDots/>
  </div>
</template>

<script>

import RandomDots from "../components/RandomDots";

export default {
  name: 'Home',
  components: {
    RandomDots,
  },
  data() {
      return {
        horizontalLayout: false,
      };
    },
  mounted() {
      this.updateWindowSize();
      window.addEventListener("resize", this.updateWindowSize);
  },
  computed: {
    isPhoneHorizontal() {
      return (window.orientation === 90 || window.orientation === -90);
    }
  },
  methods: {
    updateWindowSize() {
      const mainWidth = this.$refs.main.clientWidth;
      const mainHeight = this.$refs.main.clientHeight;
      if (mainWidth > mainHeight) {
        this.horizontalLayout = true;
      } else {
        this.horizontalLayout = false;
      }

    },
  },
}
</script>