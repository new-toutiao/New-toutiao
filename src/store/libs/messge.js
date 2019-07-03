import http from "./http.js";
import Axios from "axios";

var getListMsg = function (index) {
    http(
        "get",
        "/list/?tag=" + index + "&ac=wap&count=20&format=json_raw&as=A1851D51995F47E&cp=5D19DFC4970EAE1&min_behot_time=0&_signature=NF9FFwAAaUyecAWXUyqFmjRfRQ&i="
    ).then(res => {
        return res;
        console.log(res)
    })
}

var getContentMsg = function (index) {
    http(
        "get",
        `/i/i${data.data[1].tag_id}/info/?_signature=niyK8hAew0I0A8pyQJMjVZ4siu`
    ).then(res => {

        return res.data.content;
    })
}

export default {
    getListMsg,
    getContentMsg
}