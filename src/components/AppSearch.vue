<template>
    <form class="d-flex justify-content-center align-items-center">
        <div class="me-2 search-bar">
            <input type="text" class="form-control" id="charactername" placeholder="Search Movie" v-model="select" @keyup.enter="filterMovie(select)">
            <button @click="filterMovie(select)">Search</button>
        </div>
    </form>
</template>

<script>
export default {
    name: "AppSearch",
    components: {

    },

    data() {
        return {
            select: "",
        };
    },

    methods: {
        filterMovie(select) {
            this.$emit('movies', select);
            this.select = "";
        },
        
    },
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/appheader";
</style>