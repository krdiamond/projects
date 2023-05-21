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

   <h3 class="flex justify--evenly block--sm">
      <span class="twinkles">｡･:</span>
      <a href="https://www.linkedin.com/in/kristinadiamond/" target="_blank" class="no-underline" aria-label="Navigate to Kristina Diamond's Linkedin">
        <img src="../assets/linkedin.svg" class="icon-link x1" title="Kristina Diamond's Linkedin">
      </a>
      <span class="twinkles">*˚✧｡</span>
        <!-- <span class="icon-link x5">☀︎</span> -->
        <span class="twinkles">☀︎</span>
        <span>⋆⁺₊⋆</span>
      <a href="KristinaDiamondResume.pdf" download target="_blank" class="no-underline icon-link x2" aria-label="View Kristina Diamond's Resume">
        <span> ☾ </span> 
      </a>
      <span class="twinkles">⋆⁺₊⋆✧｡･:</span>
      <a href="https://mail.google.com/mail/?view=cm&to=krdiamond@gmail.com"  target="_blank" class="no-underline icon-link x3" aria-label="Write an Email to Kristina Diamond, This will open a new message in gmail">
        ☁︎ 
      </a> 
      <span class="twinkles">˚:</span>
      <a href="https://github.com/krdiamond" target="_blank" class="no-underline" aria-label="View Kristina Diamond's Github">
        <img src="../assets/github.svg" class="icon-link x4" title="Kristina Diamond's Linkedin">
      </a>
      <span class="twinkles">｡</span>
    </h3>


  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>