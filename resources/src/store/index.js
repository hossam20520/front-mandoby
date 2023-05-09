import Vuex from "vuex";
import Vue from "vue";
import largeSidebar from "./modules/largeSidebar";
import compactSidebar from "./modules/compactSidebar";
import config from "./modules/config";
import auth from "./modules/auth";
import language from './modules/language';



// Load Vuex
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    language,
    auth,
    largeSidebar,
    compactSidebar,
    config,
  }
});
// Create store
export default store
