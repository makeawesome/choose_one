import { topCategories, childCategories } from '../models/CategoryModel.mjs';

const store = {
    state: {
        topCategories: topCategories(),
        childCategories: childCategories(),

        chosenTopCategories: [],
        chosenChildCategories: [],
    },
    getters: {
        getTopCategories: state => topCategories(),
        getChildrenCategories: state => childCategories()
    },
    mutations: {
        setToChosenTopCategories(state, payload) {
            console.log('[MUTATION] chosenTop', payload);
            state.chosenTopCategories = payload.map(catId => catId);
        }
    },
    actions: {
        setToChosenTopCategories(store, payload) {
            console.log('[ACTION] chosenTop', payload);
            store.commit('setToChosenTopCategories', payload);
        }
    }
};

export default store;