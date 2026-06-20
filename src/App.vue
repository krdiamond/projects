<template>

  <div class="main-border position--fixed">
    <ConfettiContainer
      ref="confettiContainer"
      :height="windowHeight"
      :width="windowWidth"
      class="position--relative pointer-events--none"
      :class="{ 'z-index--2': projects }"
    />
    <Home 
      @open-portfolio="openPortfolio()" 
      @open-email="openEmail()" 
      :isTouchDevice="isTouchDevice"
      class="position--absolute top--0 width--full height--full"/>
    <Portfolio 
      v-if="projects" 
      @close-portfolio="closePortfolio()"
    />
    <Email 
      v-if="email" 
      @close-portfolio="closeEmail()"
    />
  </div>
</template>

<script>

import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
import Email from './components/Email.vue'
import ConfettiContainer from './components/ConfettiContainer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Portfolio, Email,
    ConfettiContainer,
  },
  provide() {
    return {
      getConfetti: () => this.$refs.confettiContainer,
    };
  },
  data() {
      return {
        projects: false,
        email: false,
        isTouchDevice: false,
        windowHeight: 0,
        windowWidth:0,
      }
  },
  mounted() {
      this.updateWindowSize();
      window.addEventListener("resize", this.updateWindowSize);
  },
  methods: {
    updateWindowSize() {
     this.windowWidth = window.innerWidth;
     this.windowHeight = window.innerHeight;
     this.isTouchDevice = (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    },
    openPortfolio() {
      if (this.isTouchDevice === true) {
        setTimeout(() => {
        this.projects = true;
        }, 520);
      }
      else {
        this.projects = true;
      }
    },
    openEmail() {
      if (this.isTouchDevice === true) {
        setTimeout(() => {
        this.email = true;
        }, 520);
      }
      else {
        this.email = true;
      }
    },
    closeEmail() {
        this.email = false;
    },
    closePortfolio() {
        this.projects = false;
    },
  },
}

</script>


<!-- alt="Vue logo" src="./assets/logo.png">-->