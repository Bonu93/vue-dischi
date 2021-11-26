<template>
  <div class="music-gallery mt-5">
    <div class="container">
      <div class="row justify-content-center g-0" v-if="musicList.length !== 0">
        <div class="column p-2" v-for="(album, i) in musicList" :key="`album-${i}`">
          <Card 
          :title="album.title"
          :image="album.poster"
          :artist="album.author"
          :year="album.year"
          :genre="album.genre"
          />
        </div>
        
        
      </div>
      
      <div class="loader text-center" v-else>
        <h2>Loading...</h2>
        <div class="my-5">
          <img src="../assets/logo.png" alt="">
          
        </div>
      </div>
    </div>

      
  </div>
</template>

<script>

import axios from 'axios';
import Card from '@/components/Card.vue'

export default {

    name: 'Gallery',
    components: {
      Card,
    }, 

    data () {
      return {
        musicList: [],
      }
    },

    created () {
      this.getMusicList(); 
    },

    methods: {
      getMusicList() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then((result) => {
            this.musicList = result.data.response;
          })
          .catch(err => console.log(err))
      }
    },
}
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .column {
    width: calc(100% / 8);
  }

  img {
      width: 300px;
      margin: 2rem 0;
      animation: pulse 1s infinite alternate;
  }

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transfomr: scale(1.5);    }
  }

</style>