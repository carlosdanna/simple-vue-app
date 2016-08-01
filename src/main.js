import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BookComponent from './components/book-component.vue'
import AddNewBook from './components/add-new-book.vue'
/* eslint-disable no-new */
Vue.use(VueRouter);
var router = new VueRouter();

router.map({
    '/':{
        component: BookComponent
    },
    '/books':{
        component: BookComponent
    },
    '/books/add':{
        component: AddNewBook
    }
})

router.start(App,'#app')
// new Vue({
//   el: 'body',
//   components: { App }
// })
