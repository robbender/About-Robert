import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';
 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive, faFighterJet, faSpaceShuttle, faCode } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import Landing from '@/components/Landing'
import Skills from '@/components/Skills'


library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faComment,
  faTwitter,
  faFighterJet,
  faGithub,
  faLinkedin,
  faSpaceShuttle,
  faCode
)

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VeeValidate);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

const routes = [
        // { 
        //   path: '/about', 
        //   name: 'About',
        //   component: About
        // },

        // { 
        //   path: '/contact', 
        //   name: 'Contact',
        //   component: Contact
        // },

        // { 
        //   path: '/home', 
        //   name: 'Home',
        //   component: Home
        // },
            
         { path: '/landing', 
           name: Landing,
           component: Landing 
          }
 ];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
