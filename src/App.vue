<template>
    <AppHeader />
    <main>
        <ItemList title="Movies" :items="store.movie" mediaType="movie" />
        <ItemList title="Tv Series" :items="store.tv" mediaType="tv" />
        <ItemList title="Popular Movies" :items="store.popularMovie" mediaType="popularMovie" />
        <ItemList title="Popular Tv Series" :items="store.popularTv" mediaType="popularTv" />
    </main>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import ItemList from './components/ItemList.vue';
import axios from 'axios';
import { store } from './assets/data/store';


export default {
    components: { AppHeader, ItemList },    

    data() {
        return{
            store,
            show: false,
        }
    },

    watch: {
        'store.params.query'(newVal, oldVal) { 
            if (newVal !== oldVal) { 
                this.getMovie(); 
                this.getSeries(); 
            }
        }
    },

    methods: {
        getMovie() {
            const apiurl = store.baseUrl + store.endPoint;
            const params = store.params;
            axios.get(apiurl, { params }).then((res) => {
                store.movie = res.data.results;
            })
        },        
        getSeries() {            
            const apiurl = store.baseUrl + store.endPoint.tv;
            const params = store.params;
            axios.get(apiurl, { params }).then((res) => {
                store.tv = res.data.results;
            })
        },
        getPopularMovie() {     
            const apiurl = store.baseUrl + store.endPoint.popularMovie;
            const params = store.params;
            axios.get(apiurl, { params }).then((res) => {
                store.popularMovie = res.data.results;
            })
        },
        getPopularTv() {
            const apiurl = store.baseUrl + store.endPoint.popularTv;
            const params = store.params;
            axios.get(apiurl, { params }).then((res) => {
                store.popularTv = res.data.results;
            })
        }
    },
    created() {
        this.getPopularMovie();
        this.getPopularTv();
    }
}

</script>

<style lang="scss" scoped>
@import "./assets/scss/main.scss";
</style >