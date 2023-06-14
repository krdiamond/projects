<template>
  <div ref="main" class="home container margin--20 flex flex--col align--center justify--center"> 
      <header>
        <h1 class="flex flex--col">
              <span >KRISTINA</span>
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
        <FloatingIcons class="padding-top--10"/>
      </section>
  </div>
</template>

<script>

import FloatingIcons from "../components/FloatingIcons";

export default {
  name: 'Home',
  components: {
    FloatingIcons,
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
  methods: {
    updateWindowSize() {
     console.log('updated window size')
    },
  },
}
</script>