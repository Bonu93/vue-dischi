<template>
  <main class="p-5">
      <Gallery />
  </main>
</template>

<script>
import Gallery from '@/components/Gallery.vue';

export default {
    name: 'Main',
    components: {
        Gallery, 
    }  
        
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';


main {
    flex-grow: 1;
    background-color: $bg-secondary;
    color: $txt-color-primary;
}

</style>