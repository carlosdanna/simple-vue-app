<template>
    <div class="ui container" id="app">
        <menu-bar></menu-bar>
        <book-component list-name="Book List"></book-component>
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
