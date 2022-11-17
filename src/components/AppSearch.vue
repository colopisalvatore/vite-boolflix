<template>
    <div>
        <form class="" @submit.prevent="filterMovie">
            <div class="me-2 search-bar d-flex justify-content-center align-items-center">
                <input type="text" class="form-control" id="charactername" placeholder="Search Movie" v-model.trim="text">
                <button type="submit">Search</button>
            </div>
        </form>
    </div>
</template>

<script>
import { store } from '../assets/data/store';
export default {
    name: "AppSearch",

    data() {
        return {
            text: "",
        };
    },
    
    methods: {
        filterMovie() {
            console.log(this.text)
            store.params.query = this.text;
            this.text = '';
        },
        
    },
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>