<template>
    <div>
        <div>
            <nav class="nav-container d-flex justify-content-between align-items-center">
                    <div class="logo-container d-flex justify-content-start align-items-center">
                            <img @click="backToPopular(popular)" src="../assets/img/boolflix.png" alt="" />
                    </div>
            </nav>
            <div>
                <AppSearch />
            </div>            
        </div>

        <transition name="fade">
            <div class="video-container">

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

    

    props: {
        show: Boolean,
        popular: Boolean,
    },

    methods: {
        backToPopular(popular) {
            this.$emit('back', popular);
        },
    },

};
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/appheader";
</style>