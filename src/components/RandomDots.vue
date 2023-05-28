<template>
    <div class="position--relative height--full margin--3per">
      <div class="height--full">
        <div ref="main" class="position--center position--absolute">
          <div ref="box" class="box position--absolute" v-for="(box, index) in boxes" :key="index" :style="box.style" :class="{ 'transition': isTransition }"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RandomDots',
    data() {
      return {
        boxes: [],
        isTransition: false, // Indicates if the transition animation should be applied
      };
    },
    mounted() {
      this.updateWindowSize();
      window.addEventListener("resize", this.handleResize);
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
            { width: 0, size: 20 },    // For screens below 600px width, box size is set to 80px
            { width: 250, size: 40 }, // For screens of 600px and above, box size is set to 120px
            { width: 668, size: 80 }, // For screens of 1024px and above, box size is set to 160px
            // Add more breakpoints and corresponding box sizes as needed
        ];
  
        let boxSize = 100; // Default box size
  
        for (const breakpoint of breakpoints) {
          if (mainWidth >= breakpoint.width) {
            boxSize = breakpoint.size;
          } else {
            break;
          }
        }
  
        const isOverlapping = (box, otherBoxes) => {
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
        };
  
        const getRandomPosition = (boxSize, mainWidth, mainHeight) => {
          const left = Math.random() * (mainWidth - boxSize);
          const top = Math.random() * (mainHeight - boxSize);
          return { left, top };
        };
  
        const generateBox = (boxSize, mainWidth, mainHeight, otherBoxes) => {
          const position = getRandomPosition(boxSize, mainWidth, mainHeight);
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
          if (isOverlapping(box, otherBoxes)) {
            return generateBox(boxSize, mainWidth, mainHeight, otherBoxes);
          }
          return box;
        };
  
        const boxes = [];
        for (let i = 0; i < 4; i++) {
          const box = generateBox(boxSize, mainWidth, mainHeight, boxes);
          boxes.push(box);
        }
        this.boxes = boxes;
      },
    },
  };
  </script>
  