<template>
  <div ref="main" class="home container margin--20 flex flex--col align--center " :class="{ 'justify--center': !horizontalLayout }"> 
      <header class="max-width--340 margin--auto ">
        <h1 class="flex flex--col">
              <span >KRISTINA</span>
              <span class="space_x1">DIAMOND</span>
        </h1>
        <p>front end web developer <br> specializing in shopify</p>
      </header>
      <section class="max-width--340 margin--auto ">
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
      // this.updateWindowSize();
      // window.addEventListener("resize", this.updateWindowSize);
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
      if ((mainWidth < 768) & (mainHeight < 400)) {
        this.horizontalLayout = true;
      } else if ((mainWidth > 768) & (mainWidth < 1440) & (mainHeight < 730)) {
        this.horizontalLayout = true;
      } else if ((mainWidth > 1440) & (mainHeight < 950)) {
        this.horizontalLayout = true;
      } 
      else {
        this.horizontalLayout = false;
      }

    },
  },
}
</script>