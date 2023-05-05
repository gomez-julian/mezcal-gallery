import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Match } from './mezcalInterfaces';

export const useMainStore = defineStore('main', () => {

    const matches = ref<Match[]>([]);

    return{
        matches,
        set(news:Match[]){ matches.value = news}
    }
})