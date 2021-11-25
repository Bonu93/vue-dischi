<template>
  <div class="album-card text-center h-100 p-3">
      <div class="album-cover mb-2">
          <img :src="image" alt="title">
      </div>

      <div class="description">
        <h3> {{ title }}</h3>
        <h4 class="detail"> {{ artist }}</h4>
        <h5 class="detail">{{ year }}</h5>
        <h5>{{ genre }}</h5>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        image: String, 
        artist: String, 
        year: String, 
        genre: String,
    }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

    .album-card {
        background-color: $bg-primary;
        .detail {
            color: $txt-color-secondary;        }
        h3 {
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 700;
        }
        h4 {
            font-size: 14px;
        }
        h5 {
            font-size: 12px;
        }
        .description {
            min-height: 150px;
        }
        .album-cover {
            width: 100%;
            height: 120px;
            img{
                width: 100%;
            } 
        }
    }
</style>