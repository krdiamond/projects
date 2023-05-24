<template>
  <div class="main-border position--fixed">
    <Home 
      @toggle-portfolio="togglePortfolio()"
      />
    <Portfolio 
      v-if="portfolio" 
      @toggle-portfolio="togglePortfolio()"
    />
    <Eyes/>
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
      }
  },
  methods: {
    togglePortfolio() {
      this.portfolio = !this.portfolio;
    },
  },
}

</script>


<!-- alt="Vue logo" src="./assets/logo.png">-->