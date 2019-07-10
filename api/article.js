import http from '../src/store/libs/http.js'

export default {
    getArticle(atc) {
        return http(
            "get",
            '/i/i' + atc.id + "/info/?_signature=cLU.dxASLavamn.3F398wnC1P2&i=6709624594946327043"
        )
    },
    getActive(id) {
        return http(
            "get",
            "/i/related/open/" +
            id +
            "/?parent_rid=10782173562249379545&city=深圳&province=广东&page_type=article&share_iid=&share_app_name=&wx_share_count=0&site_id=5000246&num=5&num=15&code_id=14798012085000246&code_id=14799599715000246&except_page=&test_params=%7B%7D&tt_running=0&enable_mix=1&web_id=" +
            id +
            "&utm_source=&utm_medium=&utm_campaign="
        )
    },
   

}

