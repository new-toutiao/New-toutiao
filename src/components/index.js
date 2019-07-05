import Vue from 'vue'
import { InfiniteScroll,Loadmore,Spinner,Tabbar, TabItem} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.use(InfiniteScroll);