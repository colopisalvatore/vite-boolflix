<template>
    <div class="my-card">

        <img v-if="item.poster_path !== null" :src="item.poster_path ? imgPath + item.poster_path : 'https://via.placeholder.com/330x500.png?text=Poster+Unknow'"
            alt="{{ item.title }}" />

        <img v-else src="../assets/img/not-found.jpg" alt="" />

        <div class="movie-info">

            <div class="info-box">

                <div class="text-info">
                    <strong>Titolo: </strong>
                    {{ item.title }}
                </div>

                <div class="text-info">
                    <strong>Titolo originale: </strong>
                    {{ item.original_title }}
                </div>

                <div class="text-info">
                    <strong>Voto: </strong>

                    <span v-if="item.vote_average <= 0">0</span>

                    <span v-else>
                        <i v-for="index in getStars(item.vote_average)" :key="index" class="icon-color fas fa-star">
                        </i>
                    </span>
                </div>

                <div class="text-info">
                    <strong>Lingua: </strong>
                    <span v-if="!language.includes(item.original_language)">
                        {{ item.original_language }}
                    </span>

                    <img v-else :src="store.getFlag(item.original_language)" alt="" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store';

export default {
    name: "CardComponent",

    props: {
        item: Object,
        title: String,
        original_title: String,
    },

    data() {
        return{
            language: ["en", "it", "ja", "es", "fr", "de"],
            imgPath: 'https://image.tmdb.org/t/p/w342',
            store
        }
    },

    methods: {
        getStars(vote) {
            return Math.round(vote / 2);
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>