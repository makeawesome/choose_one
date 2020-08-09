// var recommands = [{
//         id: '100',
//         name: '일식',
//         shops: [{
//                 id: '100001',
//                 name: '하야시'
//             },
//             {
//                 id: '100002',
//                 name: '사시미'
//             }
//         ],
//     },
//     {
//         id: '200',
//         name: '양식',
//         shops: [{
//                 id: '200001',
//                 name: '엉클존'
//             },
//             {
//                 id: '200002',
//                 name: '안토니오'
//             }
//         ],
//     },
//     {
//         id: '300',
//         name: '중식',
//         shops: [{
//                 id: '300001',
//                 name: '칭따오'
//             },
//             {
//                 id: '300002',
//                 name: '북경반점'
//             }
//         ],
//     }
// ];

// export default recommands;


const rootCategories = () => {
    const categories = {
        1: {
            name: '한식'
        },
        2: {
            name: '중식'
        },
        3: {
            name: '양식'
        },
        4: {
            name: '일식'
        },
        5: {
            name: '태국식'
        },
        6: {
            name: '멕시칸'
        }
    };

    return categories;
};

const childCategories = id => {
    let categories = {
        1: {
            11: {
                name: '한식1'
            },
            12: {
                name: '한식2'
            },
            13: {
                name: '한식3'
            },
            14: {
                name: '한식4'
            },
            15: {
                name: '한식5'
            }
        },
        2: {
            21: {
                name: '중식1'
            },
            22: {
                name: '중식2'
            },
            23: {
                name: '중식3'
            },
            24: {
                name: '중식4'
            },
            25: {
                name: '중식5'
            }
        },
        3: {
            31: {
                id: '31',
                name: '양식1'
            },
            32: {
                id: '32',
                name: '양식2'
            },
            33: {
                id: '33',
                name: '양식3'
            },
            34: {
                id: '34',
                name: '양식4'
            },
            35: {
                id: '35',
                name: '양식5'
            }
        },
        4: {
            41: {
                id: '41',
                name: '일식1'
            },
            42: {
                id: '42',
                name: '일식2'
            },
            43: {
                id: '43',
                name: '일식3'
            },
            44: {
                id: '44',
                name: '일식4'
            },
            45: {
                name: '양식5'
            }
        },
        5: {
            51: {
                name: '태국식1'
            },
            52: {
                name: '태국식2'
            },
            53: {
                name: '태국식3'
            },
            54: {
                name: '태국식4'
            },
            55: {
                name: '태국식5'
            }
        },
        6: {
            61: {
                name: '멕시칸1'
            },
            62: {
                name: '멕시칸2'
            },
            63: {
                name: '멕시칸3'
            },
            64: {
                name: '멕세칸4'
            },
            65: {
                name: '멕시칸5'
            }
        }
    };

    return categories[id] || {};
};

export {rootCategories, childCategories};