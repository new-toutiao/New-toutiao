import http from '../libs/http.js'

export default {
    async getListMessage(context, obj) {
        console.log(obj)
        await http(
            "get",
            "/list/?tag=" +
            obj +
            "&ac=wap&count=20&format=json_raw&as=A1851D51995F47E&cp=5D19DFC4970EAE1&min_behot_time=0&_signature=NF9FFwAAaUyecAWXUyqFmjRfRQ&i="
        ).then(res => {
            return res;
        });
    },
    getNews({ commit, state }, site) {
        if (site.kind && site.change) {
            http(
                "get",
                "/list/?tag=" +
                site.kind +
                "&ac=wap&count=20&format=json_raw&as=A1851D51995F47E&cp=5D19DFC4970EAE1&min_behot_time=0&_signature=NF9FFwAAaUyecAWXUyqFmjRfRQ&i="
            ).then(res => {
                commit("get_NewList", {
                    data: res.data,
                    kind: site.kind
                });
            });
        }
    }

}