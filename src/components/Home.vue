<template>
  <div class="home container margin--20 flex flex--col">
      <header>
          <h1 class="flex flex--col block--md">
              <span class="padding-right--20--md">KRISTINA</span>
              <span class="space_x1 no-letter-spacing--md">DIAMOND</span>
          </h1>
          <p>web developer, specializing in all things shopify and e-commerce</p>
      </header>
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
        <RandomDots/>
  </div>
</template>

<script>

import RandomDots from "../components/RandomDots";

export default {
  name: 'Home',
  components: {
    RandomDots,

  },
}
</script>