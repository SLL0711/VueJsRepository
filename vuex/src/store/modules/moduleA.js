export default {
    namespaced: true,
    state: {
        ModuleName: 'moduleA'
    },
    mutations: {
        UpdateModuleName(state) {
            state.ModuleName += '1';
        }
    },
    getters: {
        Gt(state) {
            return "1"
        }
    }
}