import Vue from 'vue'
import App from './App'

import Categories from './components/Categories'
import Ingredient from './components/Ingredient'
import Navigation from './components/Navigation'
import Descriptor from './components/Descriptor'

Vue.config.productionTip = false

Vue.component('categories', Categories)
Vue.component('descriptor', Descriptor)
Vue.component('ingredient', Ingredient)
Vue.component('navigation', Navigation)

import store from './store'

const vue = new Vue({
    render: h => h(App),
    store
}).$mount('#app')