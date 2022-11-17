<template>
    <div>
        <div>
            <div v-if="show" class="my-container mb-5">
                <div class="logo-container">
                    <img @click="backToPopular(popular)" src="../assets/img/boolflix.png" alt="" />
                    <AppSearch />
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="!show" class="intro">
                <img src="../assets/img/boolflix.gif" alt="" />
            </div>
        </transition>
    </div>
</template>

<script>
import AppSearch from './AppSearch.vue';

export default {
    name: "AppHeader",
    components: {
    AppSearch
    },

    props: { popular: Boolean },

    data() {
        return {
            show: false,
        }
    },

    methods: {

    },

    mounted() {
        setTimeout(() => {
            this.show = true;
        }, 4000);
    },

};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>