<template>
    <div class="add-new-item">

        <input type="text" v-model="TodoItem"></input>
        <button v-on:click="addElement">Add</button>

    </div>
</template>

<script>
export default {
    data () {
        return {
            // Note: modifying `msg` below will not cause changes to occur with
            // hot-reload. As reloaded components preserve their initial state,
            // modifying these values will have no effect.
            TodoItem: ''
        }
    },
    methods: {
        addElement (){
            if (this.TodoItem !== "" && this.TodoItem !== null){
                this.$dispatch('add-item', this.TodoItem)
                this.TodoItem = "";
            }
        }
    }
}
</script>
