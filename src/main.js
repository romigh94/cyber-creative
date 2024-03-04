import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import StartSida from './pages/StartSida.vue';
//import FeaturesPage from './pages/FeaturesPage.vue'
import WebDevelopment from './pages/Services/WebDev.vue'
import SearchEngine from './pages/Services/SearchEngine.vue'
import WebDesign from './pages/Services/WebDesign.vue'
import ContactUs from './pages/ContactUs.vue'


//import '../tailwind.min.css'
import './output.css'
import PricePage from './components/Pricing/PricePage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history', // Vue 2-style history mode
    routes: [
        { path: '/', name: 'Startsida', component: StartSida },
        { path: '/services/webdevelopment', name: 'WebDevelopment', component: WebDevelopment},
        { path: '/services/seo', name: 'SearchEngine', component: SearchEngine},
        { path: '/services/webdesign', name: 'WebDesign', component: WebDesign},
        { path: '/contactus', name: 'ContactUs', component: ContactUs},
        { path: '/pricing', name: 'PricePage', component: PricePage},
        { path: '/:catchAll(.*)', redirect: '/' }
    ]
});

new Vue({
    router, // Använd router här
    render: h => h(App)
}).$mount('#app');