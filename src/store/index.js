import { rootCategories, childCategories } from '../lib/SampleData.mjs';

const store = {
    state: {
        rootCategories: rootCategories(),
        childCategories: childCategories(),

        selectedRootCategories: [],
        selectedChildCategories: [],
    },
    getters: {
        rootCategoriesArray: state => {
            return Object.keys(state.rootCategories).map(categoryKey => {
                return {
                    id: categoryKey,
                    name: state.rootCategories[categoryKey].name
                };
            });
        }
    },
    mutations: {
        addSelectedRootCategory(state, payload) {

        },

        removeSelectedRootCategory(state, payload) {

        }
    },
    actions: {
        addSelectedRootCategory(context) {

        },

        removeSelectedRootCategory(state, payload) {

        }
    }
};

export default store;