import Vue from 'vue'
import { Button, Popup, Radio, Header, InfiniteScroll, Loadmore, Spinner, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.use(InfiniteScroll);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

Vue.component(Popup.name, Popup);
Vue.component(Radio.name, Radio);