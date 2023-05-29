<template>
  <div class="position--relative height--full margin--3per">
    <div class="height--full">
      <div ref="main" class="position--center position--absolute">
        <div ref="box" class="box position--absolute ag-icon_item" v-for="(icon, index) in iconsWithStats" :key="'icon-' + index" :style="icon.box.style" :class="{ 'transition': isTransition }">
          <img :src="icon.svg" :alt="icon.link" class="icon-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RandomDots',
  data() {
    return {
      amplitude: 32, // Amplitude value for floating effect
      isTransition: false, // Indicates if the transition animation should be applied
      icons: [
        {
          svg: 'OSSA New York',
          link: 'https://www.ossanewyork.com/',
        },
        {
          svg: 'OSSA New York',
          link: 'https://www.ossanewyork.com/',
        },
      ],
    };
  },
  mounted() {
    this.updateWindowSize();
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
      this.updateWindowSize();
      // Wait for transition animation to complete before disabling it
      setTimeout(() => {
        this.isTransition = false;
      }, 500);
    },
    updateWindowSize() {
      const mainWidth = this.$refs.main.clientWidth;
      const mainHeight = this.$refs.main.clientHeight;

      const breakpoints = [
        { width: 0, size: 20 }, // For screens below 600px width, box size is set to 80px
        { width: 250, size: 40 }, // For screens of 600px and above, box size is set to 120px
        { width: 668, size: 80 }, // For screens of 1024px and above, box size is set to 160px
        // Add more breakpoints and corresponding box sizes as needed
      ];

      let boxSize = null; // Default box size

      for (const breakpoint of breakpoints) {
        if (mainWidth >= breakpoint.width) {
          boxSize = breakpoint.size;
        } else {
          break;
        }
      }

      const boxes = [];
      for (let i = 0; i < this.icons.length; i++) {
        const box = this.generateBox(boxSize, mainWidth, mainHeight, boxes);
        boxes.push(box);
      }

      this.icons = this.icons.map((icon, index) => {
        return {
          ...icon,
          boxSize,
          mainWidth,
          mainHeight,
          box: boxes[index],
        };
      });
    },
    isOverlapping(box, otherBoxes) {
      for (const otherBox of otherBoxes) {
        if (
          box.left < otherBox.left + otherBox.width &&
          box.left + box.width > otherBox.left &&
          box.top < otherBox.top + otherBox.height &&
          box.top + box.height > otherBox.top
        ) {
          return true;
        }
      }
      return false;
    },
    getRandomPosition(boxSize, mainWidth, mainHeight) {
      const left = Math.random() * (mainWidth - boxSize);
      const top = Math.random() * (mainHeight - boxSize);
      return { left, top };
    },
    generateBox(boxSize, mainWidth, mainHeight, otherBoxes) {
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

      if (this.isOverlapping(box, otherBoxes)) {
        return this.generateBox(boxSize, mainWidth, mainHeight, otherBoxes);
      }
      return box;
    },
    initFloating() {
      this.$nextTick(() => {
        const iconItems = this.$refs.box; // Reference to the icon items

        iconItems.forEach((item, index) => {
          setTimeout(() => {
            this.startFloating(item, index);
          }, Math.random() * 2000);
        });
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
  },
};
</script>