<template>
  <header class="d-flex justify-content-between align-items-center">
      <div class="img-box">
        <img src="../assets/logo.png" alt="Spotify Logo">
      </div>
      <form class="mx-5">
        <select 
        name="Filter" id="Filter" 
        class="px-5 py-1" 
        v-model="userChoice"
        @change="$emit('choice', userChoice)"
        >
            <option value="">Seleziona genere</option>
            <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
           
        </select>
      </form>
    
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        genres: Array,
    }, 

    data () {
        return {
           userChoice: '',
        }
    },
}
</script>

<style lang="scss" scoped>  

    @import '@/styles/variables.scss';

    header {
        background-color: $bg-primary;
        padding: 1rem;
    }
    .img-box {
        width: 50px;
        img {
            width: 100%;
        }
    }

    select {
        background-color: $bg-secondary;
        color: $txt-color-primary;
        border: 0;
    }
</style>