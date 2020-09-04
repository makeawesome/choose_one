import { topCategories, childCategories } from '../models/CategoryModel.mjs';

const store = {
    state: {
        topCategories: topCategories(),
        childCategories: [],

        chosenTopCategories: []
    },
    getters: {
        getTopCategories: state => topCategories(),
        getChildCategories: state => (parentIds) => childCategories(parentIds)
    },
    mutations: {
        setToChosenTopCategories(state, payload) {
            console.log('[MUTATION] chosenTopCategories', payload);
            state.chosenTopCategories = payload.map(catId => catId);
            state.childCategories = childCategories(state.chosenTopCategories);
        }
    },
    actions: {
        setToChosenTopCategories(store, payload) {
            console.log('[ACTION] chosenTopCategories', payload);
            store.commit('setToChosenTopCategories', payload);
        }
    }
};

export default store;