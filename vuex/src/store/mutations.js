import Vue from 'vue'

export default {
    increment(state) {
        // 变更状态
        state.counter++
    },
    decrement(state) {
        // 变更状态
        state.counter--
    },
    incrementCount(state, payload) {
        state.counter += payload.count
    },
    definePropertiesmInfo(state) {
        
        (state.mInfo["age"] === undefined) && Vue.set(state.mInfo, 'age', 18)
    }
}