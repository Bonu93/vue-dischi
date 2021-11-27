<template>
    <main>
        <div class="music-gallery mt-5">
            <div class="container">
                <div
                    class="row justify-content-center g-0"
                    v-if="musicList.length !== 0"
                >
                    <div
                        class="column p-2"
                        v-for="(album, i) in musicList"
                        :key="`album-${i}`"
                    >
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
                    
                    <div class="my-5">
                        <img src="../assets/logo.png" alt="" />
                    </div>
                    <h2>Loading...</h2>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
    name: "Gallery",
    components: {
        Card,
    },

    props: {
      musicList: Array,
    },

}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

main {
    flex-grow: 1;
    overflow: auto;
    background-color: $bg-secondary;
    color: $txt-color-primary;
}

.column {
    width: calc(100% / 8);
}

.loader {
    animation: pulse 1s alternate infinite;
    img {
        width: 300px;
        // transform: scale(1);
    }
}


@keyframes pulse {
  from {
      transform: scale(1);
  }
  to {
      transform: scale(1.3);
  }
}
</style>
