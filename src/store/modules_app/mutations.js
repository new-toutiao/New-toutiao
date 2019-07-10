export default {
    increament(state) {
        console.log(state)
    },
    get_NewList(state, payload) {
        for (var item in payload.data) {
            state.list[payload.kind].push(payload.data[item])
        }
        setTimeout(() => {
            state.downLoadMore = true;
        }, 1000);
    },
    GETARTICLEMSG(state,lod){
        state.getArticleMsg = lod
    },
    get_NewArticle(state,data){
        state.newsArticle = Object.assign({},data);
        state.getArticleMsg = true;
    },
    clearArticle(state){
        state.newsArticle = {}
    },
    changeLoading(state,load){
        state.downLoadMore = load
    }
}