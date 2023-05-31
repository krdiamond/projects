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
      }
  },
  methods: {
    openPortfolio() {
      setTimeout(() => {
        this.portfolio = true;
        }, 520);
    },
    closePortfolio() {
        this.portfolio = false;
    },
  },
}

</script>


<!-- alt="Vue logo" src="./assets/logo.png">-->