<template>
  <div class="home container margin--20">
      <header>
          <h1 class="flex flex-col">
              <span>KRISTINA</span>
              <span class="space_x1">DIAMOND</span>
          </h1>
          <p>web developer, specializing in all things shopify and e-commerce</p>
      </header>
      <main>
          <div class="flex justify--center">
              <button class="blob-btn" @click="$emit('toggle-portfolio')">
                  PORTFOLIO
                  <span class="blob-btn__inner">
                      <span class="blob-btn__blobs">
                          <span class="blob-btn__blob"></span>
                          <span class="blob-btn__blob"></span>
                          <span class="blob-btn__blob"></span>
                          <span class="blob-btn__blob"></span>
                      </span>
                  </span>
              </button>
          </div>

        <div class="flex justify--evenly align--center block--sm padding--20">
            <span class="twinkles">｡･:</span>

            <a href="https://www.linkedin.com/in/kristinadiamond/" target="_blank" aria-label="Navigate to Kristina Diamond's Linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" class="icon-link-svg x1"  title="Kristina Diamond's Linkedin" fill="#4200FF">
                    <path  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145zM41.4,508.1H-8.5V348.4h49.9V508.1zM15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4zM241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/>
                </svg>
            </a>

            <span class="twinkles">*˚✧｡☀︎⋆⁺₊⋆</span>

            <a href="KristinaDiamondResume.pdf" download target="_blank" class="no-underline icon-link x2" aria-label="View Kristina Diamond's Resume">
                <span> ☾ </span> 
            </a>

            <span class="twinkles">⋆⁺₊</span>

            <Eyes/>

            <span class="twinkles">⋆✧｡･:</span>

            <a href="https://mail.google.com/mail/?view=cm&to=krdiamond@gmail.com"  target="_blank" class="no-underline icon-link x3" aria-label="Write an Email to Kristina Diamond, This will open a new message in gmail">
                <span> ☁︎ </span> 
            </a> 

            <span class="twinkles">˚:</span>

            <a href="https://github.com/krdiamond" target="_blank" aria-label="View Kristina Diamond's Github">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#4200FF" class="icon-link-svg x4" title="Kristina Diamond's Linkedin">
                    <path  d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z"/>
                </svg>
            </a>

            <span class="twinkles">｡</span>
          </div>
      </main>
  </div>
</template>

<script>

import Eyes from '../components/Eyes.vue'


export default {
  name: 'Home',
  components: {
    Eyes,
  },
}
</script>