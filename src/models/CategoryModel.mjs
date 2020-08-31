let names = ['', '한식', '중식', '양식', '일식', '태국식', '멕시칸'];

const topCategories = () => {
    let categories = [];

    for (let i = 1; i <= 6; i++) {
        categories.push({
            id: i + '',
            name: names[i]
        })
    }

    return categories;
};

const childCategories = parentId => {
    let categories = [];
    for (let i = 1; i <= 6; i++) {
        let data = [];
        for (let j = 1; j <= 6; j++) {
            data.push({
                id: j + '',
                name: names[j] + j
            });
        }

        categories.push({
            parentId: i,
            data
        });
    }

    return categories.filter(cat => cat.parentId === parentId);
};

export { topCategories, childCategories };