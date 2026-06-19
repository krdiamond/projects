<template> 
  <div class="portfolio height--full email container position--absolute z-index--1 text-align--left top--0 bg--white padding--20 flex justify--between align--start"> 
      <div class="email__content">
          <h2>krdiamond@gmail.com</h2>
      </div>
      <div class="email__close padding-left--10">
          <button type="button" @click="$emit('close-portfolio')" class="close bg--none border--none" aria-label="Close email">        
              <img src="../assets/x.svg"  title="Close email" alt="Close email">
          </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Email',
  data() {
      return {}
  }
}
</script>