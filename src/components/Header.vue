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
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            <option value="metal">Metal</option>
        </select>
      </form>
    
  </header>
</template>

<script>
export default {
    name: 'Header',
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