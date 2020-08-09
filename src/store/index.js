import {rootCategories, childCategories} from '../lib/SampleData.mjs';

const store = {
    state: {
        rootCategories: rootCategories(),
        childCategories: childCategories()
    },
    mutations: {},
    actions: {}
};

export default store;