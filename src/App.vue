<template>
    <div class="ui container" id="app">
        <menu-bar></menu-bar>
        <router-view></router-view>
    </div>
</template>

<script>

import BookComponent from './components/book-component.vue'
import MenuBar from './components/menu-bar.vue'

export default {
    components: {
        BookComponent,
        MenuBar
    }
}
</script>
