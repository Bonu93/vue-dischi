<template>
    <div id="app">
        <Header @choice="pickChoice" :genres="genres"/>

        <Gallery :musicList="filterMusic" />
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
            choice: "",
            genres: [],
        };
    },

    created() {
        // this.getMusicList();
    },

    computed: {
        filterMusic() {
            return this.musicList.filter((album) => {
                return album.genre.toLowerCase().includes(this.choice.toLowerCase());
            });
        },
    },

    methods: {
        getMusicList() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((result) => {
                    this.musicList = result.data.response;
                    this.getGenres();
                })
                .catch((err) => console.log(err));


        },

        pickChoice(text) {
            this.choice = text;
        },

        getGenres() {
          this.musicList.forEach((album) => {
            if (!this.genres.includes(album.genre)) {
              this.genres.push(album.genre);
            }
               
           
          })
        },
    },
};
</script>

<style lang="scss">
@import "@/styles/globals.scss";
@import "@/styles/variables.scss";
@import "~bootstrap/scss/bootstrap.scss";
</style>
