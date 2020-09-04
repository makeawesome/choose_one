let names = ['', '한식', '중식', '양식', '일식', '태국식', '멕시칸'];

const parentsNum = 6;

const topCategories = () => {
    let categories = [];

    for (let i = 1; i <= parentsNum; i++) {
        categories.push({
            id: i + '',
            name: names[i]
        })
    }

    return categories;
};

const allChildCategoriesData = () => {
    let categories = [];
    for (let i = 1; i <= parentsNum; i++) {
        let data = [];
        for (let j = 1; j <= parentsNum; j++) {
            data.push({
                id: j + '',
                name: names[i] + j,
                img: '/dist/giphy.gif?f49537d85dcdf225e9047a833d2b3e7f'
            });
        }

        categories.push({
            parentId: i + '',
            data
        });
    }

    return categories;
}

const childCategories = parentIds => {
    let childCategories = allChildCategoriesData();

    if (!parentIds) {
        return [];
    }

    let chosenChild = [];
    parentIds.forEach(parentId => {
        let child = childCategories.find(child => child.parentId === parentId);
        if (child) {
            (child.data || []).forEach(data => {
                chosenChild.push(data);
            });
        }
    })

    return chosenChild;
};

export { topCategories, childCategories };