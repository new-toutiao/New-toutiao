import http from '../libs/http.js'
import jsonp from 'jsonp'
export default {
    getNewstwo({ commit, state }, load) {
        if (load.kind) {
            jsonp('http://m.toutiao.com/list/?tag=' + load.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
                function (err, res) {
                    commit("get_NewList", {
                        data: res.data,
                        kind: load.kind
                    });
                });
        }
    },
    getNews({ commit, state }, site) {
        if (site.kind && site.change) {
            http(
                "get",
                "/list/?tag=" +
                site.kind +
                "&ac=wap&count=20&format=json_raw&as=A1851D51995F47E&cp=5D19DFC4970EAE1&min_behot_time=" + parseInt((new Date().getTime()) / 1000)
            ).then(res => {
                commit("get_NewList", {
                    data: res.data,
                    kind: site.kind
                });
               
            });
        }
    },
    getArticle({ commit }, atc) {
        if (atc.id) {
            http(
                "get",
                '/i/i' + atc.id +"/info/?_signature=cLU.dxASLavamn.3F398wnC1P2&i=6709624594946327043"
            ).then(res => {
                console.log(res.data)
                commit("get_NewArticle",res.data)
                
            })
        }
    },
    changeArticleMsg({commit},atc){
        commit("GETARTICLEMSG",atc)
    },
    clearArticles({commit}){
        commit("clearArticle")
    },
    changeLoading({commit},atc){
        commit('changeLoading',atc)
    }

}