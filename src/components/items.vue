<template>
    <div class="items">
        <p>{{todoItem}}<button v-on:click="testClickEvent">X</button></p>
    </div>
</template>

<script>
export default {
    props: {
        todoItem: String
    },
    data () {
        return {

        }
    },
    methods: {
        testClickEvent (){
            this.$dispatch('delete-todo',this.todoItem)
        }
    }
}
</script>
