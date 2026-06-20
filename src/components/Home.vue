<template>
  <div class="home-shell container flex flex--col overflow--hidden height--full width--full">
    <div
      ref="main"
      class="home home-shell__content container flex flex--col align--center justify--center flex--1 overflow--hidden"
    >
      <header class="position--relative">
        <Eyes :isTouchDevice="isTouchDevice" class="eyes position--absolute"/>
        <h1 class="flex flex--col position--relative">
          <span>KRISTINA</span>
          <span class="space_x1">DIAMOND</span>
        </h1>
        <p>front end web developer <br> specializing in shopify</p>
      </header>
      <section>
        <button class="blob-btn" @click="$emit('open-portfolio')">
          PROJECTS
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        <!-- <BouncingIcons id="BouncingIcons" @click="$emit('open-email')"/> -->
      </section>
    </div>
    <Marquee class="home-shell__marquee flex--shrink-0"/>
  </div>
</template>

<script>

import Eyes from "../components/Eyes";
import Marquee from "../components/Marquee";

export default {
  name: 'Home',
  components: {
    Eyes, Marquee
  },
  props: {
    isTouchDevice: {
      type: Boolean,
    },
  },
  data() {
      return {};
    },
  mounted() {
      this.updateWindowSize();
      window.addEventListener("resize", this.updateWindowSize);
  },
  methods: {
    updateWindowSize() {},
  },
}
</script>
