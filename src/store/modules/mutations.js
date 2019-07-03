export default {
    increament(state) {
        console.log(state)
    },
    get_NewList(state, payload) {
        for (var item in payload.data) {
            state.list[payload.kind].push(payload.data[item])
        }
        state.downLoadMore = true;
    }
}