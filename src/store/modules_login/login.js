import Vue from 'vue'
import { Cookie } from '#/js/cookie.js'
const login = {
    state: {
        ifLoad: false, //是否登陆判断
        isLogin: false,//是否打开登陆页面
        token: {
            username: Cookie.get('username') || '',
            password: Cookie.get('password') || ''
        }
    },

    getters: {
        getLoad(state) {
            return state.ifLoad;
        },
        getLogin: state => state.isLogin,
        getUser: state => state.token
    },
    mutations: {
        ADDUSER(state, value) {
            state.token = {
                username: value.username,
                password: value.password
            }
            Cookie.set({
                username: value.username,
                password: value.password
            })
            state.isLogin = true;
            state.ifLoad = true;
        },
        ESC(state) {
            state.token = {
                name: '',
                password: ''
            }
            state.ifLoad = false;
            Cookie.remove(['username', 'password'])
        }
        ,
        GETUSER(state) {
            return state.token;
        },
        CHANGE_LOGIN(state, value) {
            state.isLogin = value;
        },
        CHANGE_LOAD(state, value) {
            state.ifLoad = value;
        }
    },
    actions: {
        addUser({ commit }, value) {
            commit("ADDUSER", value)
        },
        change_Login({ commit }, value) {
            commit("CHANGE_LOGIN", value)
        },
        change_Load({ commit }, value) {
            commit("CHANGE_LOGIN", value)
        },
        esc ({commit}) {
            commit('ESC')
        }
    },

}
export default login