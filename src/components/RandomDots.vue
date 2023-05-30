<template>
  <div class="position--relative height--full margin--3per">
    <div class="height--full">
      <div ref="main" class="position--center position--absolute">
        <div ref="box" class="box position--absolute ag-icon_item" v-for="(icon, index) in icons" :key="'icon-' + index">
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
    };
  },
  mounted() {
    this.initFloating();
  },
  methods: {
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