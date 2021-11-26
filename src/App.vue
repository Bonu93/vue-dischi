<template>
    <div id="app">
        <Header @choice="pickChoice" />

        <Gallery
          :musicList="filterMusic"
           />
    </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Gallery from "@/components/Gallery.vue";

export default {
    name: "App",
    components: {
        Header,
        Gallery,
    },

    data() {
        return {
            musicList: [],
            choice: '',
        };
    },

    created() {
        this.getMusicList();
    },

    computed: {
      filterMusic() {
        return this.musicList.filter((album) => {
          return album.genre.toLowerCase().includes(this.choice.toLowerCase())
        })
      }
    },

    methods: {
        getMusicList() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((result) => {
                    this.musicList = result.data.response;
                })
                .catch((err) => console.log(err));
        },

        pickChoice(text) {
          this.choice = text;
        },

        
    },
};

</script>

<style lang="scss">
  @import "@/styles/globals.scss";
  @import "@/styles/variables.scss";
  @import "~bootstrap/scss/bootstrap.scss";
</style>
