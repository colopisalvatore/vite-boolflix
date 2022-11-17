<template>
    <div>
        <nav class="nav-container d-flex justify-content-between align-items-center">
                <div v-if="show" class="logo-container d-flex justify-content-start align-items-center">
                        <img @click="backToPopular(popular)" src="../assets/img/boolflix.png" alt="" />
                </div>
            <ul>
                <li>home</li>
                <li>home</li>
            </ul>
        </nav>
        <div v-if="show" class="search-bar">

            <input type="text" placeholder="Search Movie" v-model="select" @keyup.enter="filterMovie(select)" />
            <button @click="filterMovie(select)">Search</button>

        </div>

        <transition name="fade">
            <div v-if="!show" class="video-container">

                <img src="../assets/img/boolflix.gif" alt="" />

            </div>
        </transition>

    </div>
</template>

<script>
export default {
    name: "AppHeader",
    components: {

    },

    data() {
        return {
            select: "",
        };
    },

    props: {
        show: Boolean,
        popular: Boolean,
    },

    methods: {
        filterMovie(select) {
            this.$emit('movies', select);
            this.select = "";
        },
        backToPopular(popular) {
            this.$emit('back', popular);
        },
    },

};
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/appheader";
</style>