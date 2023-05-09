import Vue from "vue";
import VueCookies from "vue-cookies";
import store from '../store/index'
 
//  console.log(store.getters );
// console.log(token)
Vue.use(VueCookies);

export default (to, from, next) => {
  
  let accessToken =  VueCookies.isKey("Stocky_token");
  console.log(accessToken)
  if (!accessToken) {
    next("/app/sessions/signIn");
  } else {
    return next();
  }
};
