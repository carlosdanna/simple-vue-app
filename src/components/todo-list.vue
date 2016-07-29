<template>
    <div class="todo-list">
        <h1>Todo List</h1>
        <list-of-items :items="items"></list-of-items>
        <add-new-item></add-new-item>
    </div>
</template>

<script>
import AddNewItem from './add-new-item.vue';
import ListOfItems from './list-of-items.vue';

export default {
    components: {
        AddNewItem,
        ListOfItems
    },
    data () {
        return {
            // Note: modifying `msg` below will not cause changes to occur with
            // hot-reload. As reloaded components preserve their initial state,
            items: ["Hello World", "hello", "another"]
            // modifying these values will have no effect.
        }
    },
    events: {
        'delete-todo': function(item){
            var indexToDelete = this.items.indexOf(item);
            this.items.splice(indexToDelete,1);
        }
    }
}
</script>
