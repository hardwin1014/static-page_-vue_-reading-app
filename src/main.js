import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant, {
  Icon,
  Lazyload,
  Grid,
  GridItem,
  Tab,
  Tabs,
  Card,
  NavBar 
} from "vant";

import "vant/lib/index.css";

// rem适配
import "amfe-flexible";
// 全局css
import "@/style/index.less"; 

Vue.config.productionTip = false;
Vue.use(Vant, Icon);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Card);
Vue.use(NavBar); 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
