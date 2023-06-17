<template>
  <div class="main-border position--fixed">
    <Home 
      @open-portfolio="openPortfolio()"
      />
    <Portfolio 
      v-if="portfolio" 
      @close-portfolio="closePortfolio()"
    />
  </div>
</template>

<script>

import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'


export default {
  name: 'App',
  components: {
    Home,
    Portfolio,
  },
  data() {
      return {
        portfolio: true,
        isTouchDevice: false,
      }
  },
  mounted() {
      this.updateWindowSize();
      window.addEventListener("resize", this.updateWindowSize);
  },
  methods: {
    updateWindowSize() {
     this.isTouchDevice = (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    },
    openPortfolio() {
      if (this.isTouchDevice === true) {
        setTimeout(() => {
        this.portfolio = true;
        }, 520);
      }
      else {
        this.portfolio = true;
      }
    },
    closePortfolio() {
        this.portfolio = false;
    },
    
  },
}

</script>


<!-- alt="Vue logo" src="./assets/logo.png">-->