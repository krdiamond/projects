<template>

  <div class="main-border position--fixed">
    <ConfettiContainer :height="windowHeight" :width="windowWidth" class="position--relative pointer-events--none" :class="{ 'z-index--2': projects }"/>
    <Home @open-portfolio="openPortfolio()" class="position--absolute top--0"/>
    <Portfolio 
      v-if="projects" 
      @close-portfolio="closePortfolio()"
    />
  </div>
</template>

<script>

import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
import ConfettiContainer from './components/ConfettiContainer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Portfolio,
    ConfettiContainer,
  },
  data() {
      return {
        projects: false,
        isTouchDevice: false,
        windowHeight: 0,
        windowWidth:0,
      }
  },
  mounted() {
      this.confetti();
      this.updateWindowSize();
      window.addEventListener("resize", this.updateWindowSize);
  },
  methods: {
    updateWindowSize() {
     this.windowWidth = window.innerWidth;
     this.windowHeight = window.innerHeight;
     console.log(this.windowWidth);
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
    closePortfolio() {
        this.projects = false;
    },
    confetti() {
      var colors = [ '#4200FF' ];
      var shapes = ['arc'];
      var bubbles = 15;
      var spawnc = document.getElementById("spawncontainer");
      var spawnctx = spawnc.getContext("2d");

      function render(particles, spawnctx, width, height) {
        requestAnimationFrame(() => render(particles, spawnctx, width, height));
        spawnctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          p.x += p.speed * Math.cos(p.rotation * Math.PI / 180);
          p.y += p.speed * Math.sin(p.rotation * Math.PI / 180);
          p.opacity -= 0.01;
          p.speed *= p.friction;
          p.radius *= p.friction;
          p.yVel += p.gravity;
          p.y += p.yVel;
          if(p.opacity < 0 || p.radius < 0) return;
          spawnctx.beginPath();
          spawnctx.globalAlpha = p.opacity;
          spawnctx.strokeStyle = p.color;
          if(p.shape == "arc"){
            spawnctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
          } 
          spawnctx.lineWidth = p.radius;
          spawnctx.stroke();
        });
        return spawnctx;
      }

      var r = (a, b, c) => parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));

      function spawn(event){
        console.log('clicked');
        var mousex = event.clientX;
        var mousey = event.clientY;
        var particles = [];
        
        for(var i = 0; i < bubbles; i++) {
          particles.push({
            x: mousex,
            y: mousey,
            radius: r(20),
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            rotation: r(0, 360, true),
            speed: r(8, 12),
            friction: 0.9,
            opacity: r(0, 0.5, true),
            yVel: 0,
            gravity: 0.1
          });
        }
        
        render(particles, spawnctx, spawnc.width, spawnc.height);
      }

      document.onclick = spawn; 
    }
    
  },
}

</script>


<!-- alt="Vue logo" src="./assets/logo.png">-->