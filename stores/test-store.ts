import {defineStore} from "pinia";

export const useTitleStore = defineStore('main', {
    state: () => ({
        title: 'Nested Route'
    }),
    getters: {
        headerTitle: (state) => state.title
    },
    actions: {
        changeTitle(newTitle) {
            this.title = newTitle;
        }
    }
})

