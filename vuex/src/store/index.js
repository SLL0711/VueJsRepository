import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    counter: 0,
    students: [
        { name: 'sll', age: 18 },
        { name: 'datou', age: 38 }
    ],
    mInfo: {
        name: 'sll',
        height: 180
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        moduleA
    }
})

export default store