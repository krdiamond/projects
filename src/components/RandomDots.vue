<template>
  <div class="position--relative height--full margin--3per">
    <div class="height--full">
      <div ref="main" class="position--center position--absolute">
        <div ref="box" class="box position--absolute ag-icon_item" v-for="(icon, index) in iconsWithStats" :key="'icon-' + index" :style="icon.box.style">
          <img v-if="icon.copyText" @click="copyToClipboard(icon.copyText)" :src="icon.svg" alt="" />
          <a v-else :href="icon.link" target="_blank" :aria-label="icon.ariaLabel">
            <img :src="icon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import linkedIn from '../assets/linkedin.svg';
  import gitHub from '../assets/github.svg';
  import mail from '../assets/mail.svg';
  import resume from '../assets/resume.svg';

export default {
  name: 'RandomDots',
  data() {
    return {
      amplitude: 16, // Amplitude value for floating effect
      currentBreakpoint: 0,
        icons: [
          {
            svg: linkedIn,
            link: 'https://www.linkedin.com/in/kristinadiamond/',
            ariaLabel: "Navigate to Kristina Diamond's Linkedin"
          },
          {
            svg: gitHub,
            link: 'https://github.com/krdiamond',
            ariaLabel: "View Kristina Diamond's Github"
          },
          {
            copyText: 'krdiamond@gmail.com',
            svg: mail,
            link: 'https://github.com/krdiamond',
            ariaLabel: "View Kristina Diamond's Github"
          },
          {
            svg: resume,
            link: 'KristinaDiamondResume.pdf',
            ariaLabel: "View Kristina Diamond's Resume"
          },
        ],
        breakpoints: [
          { width: 0, size: 20 }, 
          { width: 250, size: 40 },
          { width: 668, size: 80 }, 
      ],
    };
  },
  mounted() {
    this.updateBoxSize();
    this.checkOverLap();
    this.initFloating();
    window.addEventListener('resize', this.handleResize);
  },
  computed: {
    iconsWithStats() {
      return this.icons.map((icon) => {
        return {
          ...icon,
          box: this.generateBox(icon.boxSize, icon.mainWidth, icon.mainHeight, this.icons),
        };
      });
    },
  },
  methods: {
    handleResize() {
      this.isTransition = true; // Enable transition animation
      this.updateBoxSize();
      // Wait for transition animation to complete before disabling it
    },
    updateBoxSize() {
      const mainWidth = this.$refs.main.clientWidth;
      const mainHeight = this.$refs.main.clientHeight;

      let boxSize = null; // Default box size

      this.breakpoints.forEach((breakpoint) => {
        if (mainWidth >= breakpoint.width) {
          boxSize = breakpoint.size;
        } else {
          return false;
        }
      });

      this.icons = this.icons.map((icon) => {
        return {
          ...icon,
          boxSize,
          mainWidth,
          mainHeight,
        };
      });
    },
    generateBox(boxSize, mainWidth, mainHeight) {
      const position = this.getRandomPosition(boxSize, mainWidth, mainHeight);
      const box = {
        left: position.left,
        top: position.top,
        width: boxSize,
        height: boxSize,
        style: {
          left: position.left + 'px',
          top: position.top + 'px',
          width: boxSize + 'px',
          height: boxSize + 'px',
        },
      };
      return box;
    },
    checkOverLap() {
      // const boxes = this.$refs.box;
      console.log(this.icons);
    },
    getRandomPosition(boxSize, mainWidth, mainHeight) {
      const left = Math.random() * (mainWidth - boxSize);
      const top = Math.random() * (mainHeight - boxSize);
      return { left, top };
    },
    initFloating() {
        const iconItems = this.$refs.box; // Reference to the icon items
        iconItems.forEach((item, index) => {
          setTimeout(() => {
            this.startFloating(item, index);
          }, Math.random() * 2000);
        });
    },
    startFloating(item) {
      setInterval(() => {
        let x = Math.floor(Math.random() * this.amplitude);
        if (Math.random() < 0.5) {
          x = -x;
        }
        let y = Math.floor(Math.random() * this.amplitude);
        if (Math.random() < 0.5) {
          y = -y;
        }
        item.style.transform = `translate(${x}px, ${y}px)`;
        item.style.transition = '5s';
      }, 3500);
    },
    copyToClipboard(text) {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert("Kristina's e-mail address is copied to your clipboard. krdiamond@gmail.com");
          })
          .catch((error) => {
            console.error('Failed to copy text: ', error);
          });
      },
  },
};
</script>