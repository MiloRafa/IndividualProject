import Vue from 'vue'
import Router from 'vue-router'
import Form from '../components/Form'
import samplePage from '../components/samplePage'
import homePage from '../components/homePage'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: homePage
        },
        {
            path: '/form',
            name: 'Form',
            component: Form
        },
        {
            path: '/sample',
            name: 'samplePage',
            component: samplePage
        }
    ]
})