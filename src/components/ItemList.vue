<template>
    <section class="container-fluid">
        <h2 class="mb-4" v-if="(mediaType == 'movie' && store.movie.length > 0) || (store.tv.length > 0 && mediaType=='tv')">{{ title }}</h2>
        <h2 class="mb-4" v-if="mediaType == 'popularMovie' || mediaType == 'popularTv'">{{ title }}</h2>
        <div class="row ">
            <div class="col-12 col-sm-6 col-md-6 col-lg-2 mb-5" v-for="(item,index) in items" :key="item.id">
                <CardComponent :item="item"/>
            </div>
        </div>
        
    </section>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../assets/data/store';
export default{
    name:"ItemList",

    props: {
        items: Array,
        title: String,
        mediaType: String
    },

    components: {
        CardComponent
    },

    data() {
        return{
            store,
            show: false,
        }
    },

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";

section {
    .overflow {
        overflow: hidden;
    }
}
</style>