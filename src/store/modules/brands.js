const state = [
    {
        "id": 1,
        "title": "Brand 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "id": 2,
        "title": "Brand 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "id": 3,
        "title": "Brand 3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "id": 4,
        "title": "Brand 4",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        "id": 5,
        "title": "Brand 5",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }
];

const getters = {
    getBrandsList: state => {
        return state;
    }
};

const actions = {
    pseudoFetchBrands ({ commit, getters }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getters.getBrandsList);
            }, 1000);
        })
    }
};

const mutations = {
};

export default {
    state,
    getters,
    actions,
    mutations
}
