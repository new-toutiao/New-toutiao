import Vue from 'vue'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
const app = {
    state: {
        routerChange: true,  //路由变化
        newList: [{
            text: "推荐",
            url: "/home/all",
            type: "__all__",
            id: 1
        },
        {
            text: "热点",
            url: "/home/hot",
            type: "news_hot",
            id: 2
        },
        {
            text: "社会",
            url: "/home/society",
            type: "news_society",
            id: 3
        },
        {
            text: "娱乐",
            url: "/home/entertainment",
            type: "news_entertainment",
            id: 4
        },
        {
            text: "科技",
            url: "/home/tech",
            type: "news_tech",
            id: 5
        },
        {
            text: "汽车",
            url: "/home/car",
            type: "news_car",
            id: 6
        },
        {
            text: "体育",
            url: "/home/sports",
            type: "news_sports",
            id: 7
        },
        {
            text: "财经",
            url: "/home/finance",
            type: "news_finance",
            id: 8
        },
        {
            text: "军事",
            url: "/home/military",
            type: "news_military",
            id: 9
        },
        {
            text: "国际",
            url: "/home/world",
            type: "news_world",
            id: 10
        },
        {
            text: "时尚",
            url: "/home/fashion",
            type: "news_fashion",
            id: 11
        }, {
            text: '游戏',
            url: "/home/game",
            type: "news_game",
            id: 12
        },
        {
            text: '旅游',
            url: "/home/travel",
            type: "news_travel",
            id: 13
        },
        {
            text: '历史',
            url: "/home/history",
            type: "news_history",
            id: 14
        },
        {
            text: '搜索',
            url: "/home/discovery",
            type: "news_discovery",
            id: 15
        },
        {
            text: '美食',
            url: "/home/food",
            type: "news_food",
            id: 16
        },
        {
            text: '育儿',
            url: "/home/baby",
            type: "news_baby",
            id: 17
        },
        {
            text: '养生',
            url: "/home/regimen",
            type: "news_regimen",
            id: 18
        },
        {
            text: '故事',
            url: "/home/story",
            type: "news_story",
            id: 19
        },
        {
            text: '美文',
            url: "/home/essay",
            type: "news_essay",
            id: 20
        }
        ],
        list: {                //首页所有新闻栏目内容
            __all__: [],
            news_hot: [],
            news_society: [],
            news_entertainment: [],
            news_tech: [],
            news_car: [],
            news_sports: [],
            news_finance: [],
            news_military: [],
            news_world: [],
            news_fashion: [],
            news_game: [],
            news_travel: [],
            news_history: [],
            news_discovery: [],
            news_food: [],
            news_baby: [],
            news_regimen: [],
            news_story: [],
            news_essay: []
        },
        downLoadMore: false,
        newsArticle:{},
        getArticleMsg:false,
    },

    getters,
    mutations,
    actions,

}
export default app