import Prismic from 'prismic-javascript'
import Cleanser from '../cleanser'

const state = {
    activeCategory: false,
    activeIngredient: false,
    ingredients: [
        //
    ]
}

const getters = {
    activeCategory: state => state.activeCategory,
    activeIngredient: state => state.activeIngredient,
    ingredients: state => state.ingredients
}

const actions = {
    getIngredients({commit}) {
        Prismic.api('https://tespo.cdn.prismic.io/api/v2').then(api => {
            return api.query('', {
                orderings: '[my.ingredient.name]',
                pageSize: 100
            })
        }).then(response => {
            commit('setIngredients', response)
        })
    }
}

const mutations = {

    setActiveCategory(state, category){
        state.activeCategory = (category === 'false') ? false : category
    },
  setActiveIngredient(state, ingredient) {
    state.activeIngredient = ingredient
  },
  setIngredients(state, ingredients) {
    state.ingredients = Cleanser.cleanse(ingredients)
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}