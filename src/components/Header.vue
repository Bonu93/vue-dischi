<template>
  <header>
      <div class="img-box">
        <img src="../assets/logo.png" alt="Spotify Logo">
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
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
</style>