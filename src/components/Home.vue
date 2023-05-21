<template>
  <div class="container">


    <h1 class="flex flex-col">
        <span>KRISTINA</span>
        <span class="space_x1">DIAMOND</span>
    </h1>


     <h2>web developer, specializing in all things shopify and e-commerce</h2>

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


   <!-- <h3 class="flex justify--evenly block--sm">
      <span class="twinkles">｡･:</span>
      <a href="https://www.linkedin.com/in/kristinadiamond/" target="_blank" class="no-underline" aria-label="Navigate to Kristina Diamond's Linkedin">
        <img src="../assets/linkedin.svg" class="icon-link" title="Kristina Diamond's Linkedin">
      </a>
      <span class="twinkles">*˚✧｡☀︎⋆⁺₊⋆</span>
      <a href="KristinaDiamondResume.pdf" download target="_blank" class="no-underline icon-link" aria-label="View Kristina Diamond's Resume">
      ☾ 
      </a>
      <span class="twinkles">⋆⁺₊⋆</span>
      <span class="twinkles">✧</span>
      <span class="twinkles">｡･:</span>
      <a href="https://mail.google.com/mail/?view=cm&to=krdiamond@gmail.com"  target="_blank" class="no-underline icon-link" aria-label="Write an Email to Kristina Diamond, This will open a new message in gmail">
        ☁︎ 
      </a> 
      <span class="twinkles">˚:</span>
      <a href="https://github.com/krdiamond" target="_blank" class="no-underline" aria-label="View Kristina Diamond's Github">
        <img src="../assets/github.svg" class="icon-link" title="Kristina Diamond's Linkedin">
      </a>
      <span class="twinkles">｡</span>
    </h3>-->

    
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="hide">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
</svg> 
    


  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>