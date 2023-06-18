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
        portfolio: false,
        isTouchDevice: false,
      }
  },
  mounted() {
    const textStyle = [
  'color: red',
  'font-size: 30px',
  ].join(';');
const imageStyle = [
  'background-image: url("https://media.giphy.com/media/sXOj0wtpyELdu/source.gif")',
  'background-size: cover',
  'padding: 150px 300px'
  ].join(';');
// it's just a joke 😸
console.log('%cYou have 6 seconds to count all the cats', textStyle);
setTimeout(function() {
  console.log('%c ', imageStyle);
}, 3000);
setTimeout(function() {
  console.clear();
}, 9000);



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