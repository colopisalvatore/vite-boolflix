import { reactive } from "vue";

export const store = reactive ({
    baseUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv',
        popularMovie: 'movie/popular',
        popularTv: 'tv/popular',
    },
    params: {
        api_key: 'f5c69648b77e5f196418f82a39d17460',
        query: '',
        language: "it-IT",
    },
    movie: [],
    tv: [],
    popularMovie: [],
    popularTv: [],

    APIurl: 'https://countryflagsapi.com/png/',
        getFlag(country) {
            country == 'uk' ? country = 'gb' : '';
            country == 'en' ? country = 'us' : '';
            country == 'ja' ? country = 'jp' : '';
            country == 'el' ? country = 'gr' : '';
            country == 'cs' ? country = 'cz' : '';
            country == 'ko' ? country = 'kr' : '';

            const API = this.APIurl + country

            return API;
        },
});