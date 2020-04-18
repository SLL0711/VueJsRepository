export default {
    GStu(state) {
        return state.students.filter(a => a.age > 20)
    },
    LStu(state) {
        return state.students.filter(a => a.age < 20)
    }
}