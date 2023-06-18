<template>
    <div class="flex justify--evenly" >
        <div ref="box" class="box ag-icon_item" v-for="(icon, index) in icons" :key="'icon-' + index">
          <button v-if="icon.copyText" type="button" :aria-label="icon.ariaLabel" class="box">
            <img :title="icon.ariaLabel"  @click="copyToClipboard(icon.copyText)" :src="icon.svg" :alt="icon.ariaLabel" />
          </button>
          <a v-else :href="icon.link" target="_blank" :aria-label="icon.ariaLabel">
            <img :src="icon.svg" alt="" />
          </a>
        </div>
    </div>
</template>



<script>  
  import linkedIn from '../assets/linkedin.svg';
  import gitHub from '../assets/github.svg';
  import mail from '../assets/mail.svg';
  import resume from '../assets/resume.svg';

export default {
  name: 'BouncingIcons',
  data() {
    return {
        icons: [
          {
            svg: linkedIn,
            link: 'https://www.linkedin.com/in/kristinadiamond/',
            ariaLabel: "View Kristina Diamond's Linkedin"
          },
          {
            copyText: 'krdiamond@gmail.com',
            svg: mail,
            link: 'https://github.com/krdiamond',
            ariaLabel: "Copy Kristina Diamond's email to your clipboard"
          },
          {
            svg: gitHub,
            link: 'https://github.com/krdiamond',
            ariaLabel: "View Kristina Diamond's Github"
          },
          {
            svg: resume,
            link: 'https://krdiamond.github.io/projects/KristinaDiamondResume.pdf',
            ariaLabel: "View Kristina Diamond's Resume"
          },
        ],
    };
  },
  methods: {
    copyToClipboard(text) {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert("✉️ krdiamond@gmail.com ✉️ copied to your clipboard");
          })
          .catch((error) => {
            console.error('Failed to copy text: ', error);
          });
      },
  },
};
</script>