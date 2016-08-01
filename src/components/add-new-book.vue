<template>
    <div>
        <form class="ui form">
            <h2 class="ui dividing header">Add new book</h4>
            <div class="field">
                <label>Name of the Book</label>
                <input type="text" v-model="books.name" placeholder="Name of the Book"></input>
            </div>
            <div class="field">
                <label>Name of the Author</label>
                <input type="text" v-model="books.author" placeholder="Name of the Author"></input>
            </div>
            <div class="field">
                <label>ISBN Code</label>
                <input type="text" v-model="books.isbn" placeholder="ISBN Code"></input>
            </div>
            <div class="field">
                <label>Published Date</label>
                <input type="text" v-model="books.publishDate" placeholder="Publish date"></input>
            </div>
            <div class="field">
                <label>Category</label>
                <input type="text" v-model="books.category" placeholder="Category"></input>
            </div>
            <div class="field">
                <label>Number of books issued</label>
                <input type="text" v-model="books.issuedBooks" placeholder="Number of books issued"></input>
            </div>
            <a class="ui button primary" @click="addElement">Add</a>
            <a v-link="{path: '/books'}" class="ui button red">Cancel</a>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // Note: modifying `msg` below will not cause changes to occur with
            // hot-reload. As reloaded components preserve their initial state,
            // modifying these values will have no effect.
            books: {}
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
