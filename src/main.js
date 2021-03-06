import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import BookComponent from './components/book-component.vue'
import AddNewBook from './components/add-new-book.vue'
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter();

router.map({
    '/':{
        name: 'home',
        component: BookComponent
    },
    '/books':{
        name: 'books',
        component: BookComponent
    },
    '/books/add':{
        name: 'books-add',
        component: AddNewBook
    }
})

router.start(App,'#app')
