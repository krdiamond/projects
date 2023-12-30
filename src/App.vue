<template>

  <div class="main-border position--fixed" 
    @mousemove="moveMouse($event.pageX, $event.pageY)"
    @mousedown="isMouseDown = true"
    @mouseup="isMouseDown = false" >
  
    <div class="cursor" :class="{'is-down': isMouseDown}" :style="{left:cursorLeft, top:cursorTop}"></div>

    <canvas class="in"></canvas>

    <!-- <ConfettiContainer 
    :height="windowHeight" :width="windowWidth" class="position--relative pointer-events--none" :class="{ 'z-index--2': projects }"/>
    <Home 
      @open-portfolio="openPortfolio()" 
      :isTouchDevice="isTouchDevice"
      class="position--absolute top--0"/>
    <Portfolio 
      v-if="projects" 
      @close-portfolio="closePortfolio()"
    /> -->
  </div>
</template>

<script>

// import Home from './components/Home.vue'
// import Portfolio from './components/Portfolio.vue'
// import ConfettiContainer from './components/ConfettiContainer.vue'

export default {
  name: 'App',
  components: {
    // Home,
    // Portfolio,
    // ConfettiContainer,
  },
  data() {
      return {
        projects: false,
        isTouchDevice: false,
        windowHeight: 0,
        windowWidth:0,
        isMouseDown: false,
        cursorLeft: 0,
        cursorTop: 0,
        W: 0,
        H: 0,
        dpi: 0,
      }
  },
  mounted() {
      this.updateWindowSize();
      this.setupCanvas();
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
    closePortfolio() {
        this.projects = false;
    },
    moveMouse(x, y) {
        this.cursorLeft = (x-18) + "px"
        this.cursorTop = (y-18) + "px"
    },
    setupCanvas() {
      this.w = window.innerWidth
      this.h = window.innerHeight
      this.dpi = window.devicePixelRatio
      
      // canvas.width = w * dpi
      // canvas.height = h * dpi
      // canvas.style.width = w + "px"
      // canvas.style.height = h + "px"
      
      // // which context are we talking about? 2d? 3d? something else?
      // const context = canvas.getContext("2d")
      // context.scale(dpi, dpi)
      
      
      // if (canvas.classList.contains("in")) {
      //   context.fillStyle = "#000000"
      //   context.strokeStyle = "#ffffff"
      // } else {
      //   context.fillStyle = "#ffffff"
      //   context.strokeStyle = "#000000"
      // }
      
      // context.lineWidth = 80
      // context.lineCap = "round"
      // context.lineJoin = "round"
      
      // context.shadowBlur = 10
      // context.shadowColor = context.strokeStyle
        
      // context.rect(0, 0, w, h)
      // context.fill()
    }
  },
}

</script>


<!-- alt="Vue logo" src="./assets/logo.png">-->