<template>
    <div>
        <div class="closeAddAnimation" v-if="!showAddBooks" transition="pulse">
            <h1 class="ui center aligned header">{{listName}}</h1>
            <list-of-books :books="books"></list-of-books>
        </div>
        <div class="showAddAnimation" v-if="showAddBooks" transition="pulse">
            <add-new-book :books="books"></add-new-book>
        </div>


    </div>

</template>

<script>
import AddNewBook from './add-new-book.vue';
import ListOfBooks from './list-of-books.vue';

export default {
    components: {
        AddNewBook,
        ListOfBooks
    },
    // props: ["listName"],
    data () {
        return {
            // Note: modifying `msg` below will not cause changes to occur with
            // hot-reload. As reloaded components preserve their initial state,
            books: []
            // modifying these values will have no effect.
        }
    },
    created(){
        this.$http.get('https://api.mlab.com/api/1/databases/library-project/collections/books?apiKey=QxnCpZ0YRbFTOVuTy0aosuh_o4oqCbjP').then( (response) => {
            console.log(response.data);
            this.books = response.data;
        }, (error) => {
            console.log(error);
        })
    },
    events: {
        'delete-todo': function(item){
            var indexToDelete = this.items.indexOf(item);
            this.items.splice(indexToDelete,1);
        },
        'open-add-book': function(){
            // $('.closeAddAnimation').transition('pulse');
            this.showAddBooks = true ;
        }
    }
}
</script>
