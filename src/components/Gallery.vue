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
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
          <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
          <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
          <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM1 3v3h14V3H1Zm14 4H1v7h14V7Z"/>
          </svg>
          
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

  svg {
      width: 100px;
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